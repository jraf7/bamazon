$("#submit").on("click", function(event) {
    console.log("There was a click");
    event.preventDefault();
    var orderData = {
      product_name: $("#product_name").val(),
      quantity: $("#quantity").val()
    };
    $.post("/api/products", orderData, function(data) {
      $("#response").text(data);
    });
  });

$.get("/api/products", function (products) {

    var table_body = $("#product_body");
      products.forEach(product => {
        var tr = $("<tr>");
        tr.append("<td>" + product.product_name + "</td>");
        tr.append("<td>" + product.price + "</td>");
        tr.append("<td>" + product.stock_quantity + "</td>");
        tr.append(
          `<td> <input type="text" name="fname" id='${product.id}'></input> </td>`
        );
        tr.append(
          `<td> <button class='myButton btn btn-primary' val='${product.id}' >Purchase</button> </td>`
        );
        table_body.append(tr);
      });

})