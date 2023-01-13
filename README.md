# Restful-api
Representational state transfer (REST) is a software architectural style that describes a uniform interface between physically separate components, often across the internet in a client-server architecture.

i.e is a set of rules that is used to build client-server architecture and enables us firepower CRUD web applications. 

- REST allows dynamic content to be rendered when it's requested. 

- RESTful Dynamic content uses server-side rendering to generate a website and sends the content to the requesting web browser.

- A web API that obeys the REST constraints is informally described as RESTful.

- to apply REST to web services we would ;

1. define a base URI such as http://api.example.com/product

2. have a standard HTTP method for a specific action(GET - to view, POST - to create, PUT - to modify or update, DELETE - to delete or destroy)

and with this architecture we can perform basic CRUD operations. 

example applied to a web application (express & node):

app.listen(8080)
app.get('/products', (req, res) => {
	res.render('product_information', { productId });
})

app.post('/products', (req, res) => {
	const { productName, price } = req.body;
	res.render('new_product_added', { productName })
})

app.put('/products:')
