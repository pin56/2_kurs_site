from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Настройка шаблонов
templates = Jinja2Templates(directory="templates")

# Роут для главной страницы
@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# Подключение статических файлов (если требуется)
app.mount("/static", StaticFiles(directory="static"), name="static")
