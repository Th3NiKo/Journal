var express = require("express"),
	bodyParser = require("body-parser"),
	cors = require("cors"),
	app = express();

var model = [
	{
		id:0,
		checked: false,
		tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis tortor tellus, a accumsan lorem hendrerit eget. Aenean venenatis fringilla ante, sed commodo justo finibus quis. Cras fringilla velit eros, id imperdiet nulla tempor id. Nulla commodo pharetra eros, id imperdiet nibh. Nunc fringilla non mauris sed fermentum. In et pulvinar orci. Nam ullamcorper urna ut elit auctor, a elementum dolor rutrum. Etiam tincidunt mattis condimentum. Nulla sit amet lacus lobortis, tempus ex eu, hendrerit arcu. Donec nec ligula semper, vestibulum tortor non, scelerisque sapien. Nullam id elit sapien. Nunc convallis nulla vel rhoncus ullamcorper. Praesent interdum dignissim massa non faucibus. Suspendisse potenti. Vestibulum hendrerit, felis vitae rutrum interdum, ex justo accumsan elit, at malesuada lectus nunc pharetra lectus. Donec ornare tellus et mattis volutpat.",
		data: "Saturday, 2017-01-21"
	},
	{
		id:1,
		checked: false,
		tekst: "Praesent rutrum augue id neque efficitur porta. Aliquam ultrices dapibus felis, nec elementum urna ultrices nec. Donec lacinia purus eu porta condimentum. Curabitur at risus in ante porta vulputate ut quis ex. Maecenas rhoncus ac lorem quis consectetur. Maecenas sed dictum velit. Proin vel urna a purus molestie facilisis. Mauris massa erat, cursus in malesuada a, tincidunt nec augue. Sed tincidunt vehicula volutpat. Phasellus non sodales nunc.",	
		data: "Saturday, 2017-01-21"
	},
	{
		id:2,
		checked: false,
		tekst: "Nam non pulvinar ex. Pellentesque accumsan aliquam ex, et facilisis mauris porttitor facilisis. Integer ut congue massa. Praesent sagittis eros eleifend finibus maximus. Phasellus volutpat tempor enim, pellentesque tristique neque viverra quis. Nulla sollicitudin non tortor eu facilisis. Duis hendrerit nibh a felis hendrerit congue. Duis nec imperdiet mi. Maecenas leo mauris, volutpat vel nisi eget, laoreet sagittis justo.",
		data: "Saturday, 2017-01-21"
	}
];

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get("/api/books", function(req, res){
	res.status(200).send(model);
});

app.get("/api/books/:id", function(req, res){
	var id = req.params.id;
	var index = model.findIndex(function(book){
		return book.id == req.params.id;
	});
	res.status(200).send(model[index]);
});

app.delete("/api/books/:id", function(req, res){
	var id = req.params.id;
	var index = model.findIndex(function(book){
		return book.id == req.params.id;
	});
	model.splice(index, 1);
	res.status(200).send("Removed");
});

app.post("/api/books", function(req, res){
	var data = req.body;
	data.checked = JSON.parse(data.checked);
	model.push(data);
	
	res.status(201).send("/api/books" + data.id);
});

app.listen(3000, function(){
	console.log("serwer works");
});

