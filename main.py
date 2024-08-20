import os
from flask import Flask, render_template, request
import smtplib
from flask_mail import Mail, Message
from dotenv import load_dotenv

# Loads variables from the .env file
load_dotenv()

app = Flask(__name__)

app.config['MAIL_SERVER'] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
app.config['MAIL_USE_TLS'] = False
app.config["MAIL_USE_SSL"] = True

mail = Mail()
mail.init_app(app)


@app.route('/', methods=['POST', 'GET'])
def home():
    if request.method == "POST":
        email_address = request.form.get('email_address')
        message = request.form.get('message')
        msg = Message(f"Message from {email_address}", sender=email_address, recipients=[os.getenv("MAIL_USERNAME")])
        msg.body = message
        mail.send(msg)
        return render_template("index.html", success=1)
    return render_template("index.html")



if __name__ == "__main__":
    app.run(debug=True)