$.get("assets/html/nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

$.get("assets/html/careerView.html", function(data){
    $("#career-placeholder").replaceWith(data);
});

$.get("assets/html/footer.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});

$.get("assets/html/portfolio.html", function(data){
    $("#portfolio-placeholder").replaceWith(data);
});

$.get("assets/html/productdp.html", function(data){
    $("#productdp-placeholder").replaceWith(data);
});

$.get("assets/html/testimonial.html", function(data){
    $("#testimonial-placeholder").replaceWith(data);
});

$.get("assets/html/companies-banner.html", function(data){
    $("#companies-banner-placeholder").replaceWith(data);
});