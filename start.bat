@echo off
echo url:http://127.0.0.1:3000

::python -m SimpleHTTPServer 3000
python -m http.server 3000
pause