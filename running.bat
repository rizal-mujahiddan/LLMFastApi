@echo off

:: Start the backend FastAPI application
cd backend_fastapi
start /B cmd /C "poetry run uvicorn main:app --reload > ../backend.log 2>&1"
cd ..

:: Start the frontend React application
cd frontend_react
start /B cmd /C "nodemon -x npm start > ../frontend.log 2>&1"
cd ..

:: Notify the user
echo Backend and frontend are starting...