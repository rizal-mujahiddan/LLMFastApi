(cd backend_fastapi && poetry run uvicorn main:app --reload > backend.log 2>&1 &) 
(cd frontend_react && nodemon -x npm start > frontend.log 2>&1 &)
