from flask import Response, Flask

app = Flask(__name__)

@app.route("/image/<imageid>")
def index(imageid):
    image = file("image/{}.png".format(imageid))
    resp = Response(image, mimetype="image/png")
    return resp

app.run(debug=True)