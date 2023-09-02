import smtplib
from flask import Flask, render_template, request
from flask_bootstrap import Bootstrap5


app = Flask(__name__)
app.config['SECRET_KEY'] = 're46sdfhmfyi7845vWER6MY89DR55'
Bootstrap5(app)


@app.route('/')
def home():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/contact", methods=["POST", "GET"])
def contact():
    if request.method == 'POST':
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        subject = request.form["subject"]
        message = request.form["message"]

        # send an email - email and password set as environment variables.
        # NB: No need to put single or double quote around the NAME(S) or value(s) in environment variables
        my_mail = "bicprogramming@gmail.com"
        my_password = "yderlbqimxvcqcna"  # taken from gmail setting - security - App password ###
        # You can't use your gmail account password.

        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(user=my_mail, password=my_password)
            connection.sendmail(
                from_addr=my_mail,
                to_addrs="cedricbenonga13@gmail.com",
                msg=f"subject:From my Portfolio Website\n\n{name}\n{email}\n{phone}\n{subject}\n{message}"
            )

        return render_template("contact.html", msg_sent=True)
    return render_template("contact.html", msg_sent=False)


@app.route("/work")
def work():
    return render_template("work.html")


@app.route('/more')
def more():

    works = [
        ["static/img/blog-users.jpg", "Blog"],
        ["static/img/cafe-api.jpg", "Cafe API"],
        ["static/img/coffee-wifi.jpg", "Coffee & Wifi"],
        ["static/img/price-checker.jpg", "e-Price Checker"],
        ["static/img/top-movie.jpg", "Top Movies"],
        ["static/img/automation.jpg", "Job automation"]
    ]

    return render_template("more.html", works=works)


if __name__ == "__main__":
    app.run(debug=True)


