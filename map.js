function initMap() {
	var myLatLng = {lat: 45.0552693, lng: 20.0825635};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.0552693, lng: 20.0825635},
        scrollwheel: false,
        zoom: 15
    });
     var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Dositeja Obradovića 22, Inđija'
        });
}


// center: {lat: 45.0552813, lng: 20.0819694},