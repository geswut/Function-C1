function cars(name, model, year, image) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.image = image;
}

// create an array to add products to
var newcars = []
// create new products from the product constructor
var car1 = new cars("carone", "modelone", 2001, "img/car1.jpg")
var car2 = new cars("cartwo", "modeltwo", 2002, "img/car2.jpg")
var car3 = new cars("carthree", "modelthree", 2003, "img/car3.jpg")
var car4 = new cars("carfour", "modelfour", 2004, "img/car4.jpg")

// add products to array of products
newcars.push(car1, car2, car3, car4)


// loop through products array
for (i = 0; i < newcars.length; i++) {

  // create text for new elements
  var cName = document.createTextNode( "Name: " + newcars[i].name)
  var cModel = document.createTextNode("Model: " + newcars[i].model)
  var cYear = document.createTextNode("Year: " + newcars[i].year)
  var cButton = document.createTextNode("Buy Now!")

  // update source attribute
  var cImage = newcars[i].image

// create new elements for each product
  var cCol = document.createElement("div")
  var cDiv = document.createElement("div")
  var cH3 = document.createElement("h3")
  var cH4 = document.createElement("h4")
  var cH5 = document.createElement("h5")
  var cBuy = document.createElement("button")
  var cImg = document.createElement("img")
  var carname = document.createElement("input")
  var carmodel = document.createElement("input")
  var caryear = document.createElement("input")
  var carimage = document.createElement("img")
  var addnew = document.getElementById("addnew")


  carname.className="inputs"
  carmodel.className = "inputs"
  caryear.className="inputs"

  carname.placeholder = "Type Car Name"
  caryear.placeholder = "Type Car Year"
  carmodel.placeholder = "Type Car Year"

  caryear.type="number"

// add text to elements
  cH3.appendChild(cName)
  cH4.appendChild(cModel)
  cH5.appendChild(cYear)
  cBuy.appendChild(cButton)

  cBuy.className = "btn btn-primary"
  cImg.src = cImage

  	// update class attributes
  cImg.className = "img-responsive"
  cCol.className ="col-sm-3"
  cDiv.className ="Carss" + " thumbnail"

// add elements to new div
  cDiv.appendChild(cH3)
  cDiv.appendChild(cH4)
  cDiv.appendChild(cH5)
  cDiv.appendChild(cBuy)
  cDiv.appendChild(cImg)


// add new div to new item div
  cCol.appendChild(cDiv)

  // add new item to the element with id="Cars"
  document.getElementById("Cars").appendChild(cCol)
}
addnew.appendChild(carname)
addnew.appendChild(carmodel)
addnew.appendChild(caryear)

function add() {

  var cn = carname.value
  var cm = carmodel.value
  var cy = caryear.value
  var ci = "img/car1.jpg"

  if(cn == "" || cm == "" || cy == "") {
    alert ("Please fill out all 3 sections")
    return;
  } else {
  var carnew = new cars(cn, cm, cy, ci)
  newcars.push(carnew)
    var cName = document.createTextNode( "Name: " + carnew.name)
    var cModel = document.createTextNode("Model: " + carnew.model)
    var cYear = document.createTextNode("Year: " + carnew.year)
    var cButton = document.createTextNode("Buy Now!")
    var cImg = document.createElement("img")

    // update source attribute
    var cImage = carnew.image

    var cCol = document.createElement("div")
    var cDiv = document.createElement("div")
    var cH3 = document.createElement("h3")
    var cH4 = document.createElement("h4")
    var cH5 = document.createElement("h5")
    var cBuy = document.createElement("button")

    cH3.appendChild(cName)
    cH4.appendChild(cModel)
    cH5.appendChild(cYear)
    cBuy.appendChild(cButton)

      cBuy.className = "btn btn-primary"
      cImg.src = cImage

      	// update class attributes
      cImg.className = "img-responsive"
      cCol.className ="col-sm-3"
      cDiv.className ="Carss" + " thumbnail"

    // add elements to new div
      cDiv.appendChild(cH3)
      cDiv.appendChild(cH4)
      cDiv.appendChild(cH5)
      cDiv.appendChild(cBuy)
      cDiv.appendChild(cImg)

    // add new div to new item div
      cCol.appendChild(cDiv)

      // add new item to the element with id="Cars"
      document.getElementById("Cars").appendChild(cCol)
      remove()
  }
}

function remove() {
  carname.value = ""
  carmodel.value = ""
  caryear.value = ""
  return;
}
