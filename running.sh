(cd backend_fastapi && poetry run uvicorn main:app --reload > /dev/null 2>&1 &) && (cd frontend_react && nodemon -x npm start > /dev/null 2>&1 &)
