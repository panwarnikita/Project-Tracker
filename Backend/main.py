from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from authlib.integrations.starlette_client import OAuth
from starlette.requests import Request
from starlette.middleware.sessions import SessionMiddleware

app = FastAPI()


app.add_middleware(SessionMiddleware, secret_key="SUPER_SECRET_KEY_CHANGE_THIS")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


oauth = OAuth()
oauth.register(
    name='google',
    client_id='YOUR_GOOGLE_CLIENT_ID_HERE',
    client_secret='YOUR_GOOGLE_CLIENT_SECRET_HERE', 
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'}
)

@app.get("/")
def home():
    return {"message": "AI-Labs Project Tracker Backend is running!"}


@app.get("/auth/login")
async def login(request: Request):
    redirect_uri = 'http://localhost:8000/auth/callback'
    return await oauth.google.authorize_redirect(request, redirect_uri)

@app.get("/auth/callback")
async def auth_callback(request: Request):
    try:
        token = await oauth.google.authorize_access_token(request)
        user_info = token.get('userinfo')
        if user_info:
            import urllib.parse
            user_data = urllib.parse.quote(user_info['name'])
            user_email = urllib.parse.quote(user_info['email'])
            return RedirectResponse(url=f"http://localhost:5174?name={user_data}&email={user_email}")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Authentication failed: {str(e)}")