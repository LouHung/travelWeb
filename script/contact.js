function initMap(){
    //map option
    let options = {
        zoom:8,
        center:{lat:10.82302,lng:106.62965}
    }
    //new map
    let map = new google.maps.Map(document.getElementById('map'),options)

    // //add marker
    // var marker = new google.maps.Marker({
    //     position:{lat:10.82302,lng:106.62965},
    //     map:map
    // })
    // var infoWindow= new google.maps.InfoWindow({
    //     content:`<h1>hello</h1>`
    // })
    // marker.addListener('click', function(){
    //     infoWindow.open(map, marker)
    // })
    let marker = [
        {
            coords:{lat:10.4114,lng:107.1362},
            iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1>Hello</h1>'
        },
        {coords:{lat:10.687392,lng:106.593854},
             content: '<h1>Hi there</h1>'
        }
    ]

    marker.forEach((position)=>{
        addMarker(position)
    })
    // addMarker({
    //     coords:{lat:10.4114,lng:107.1362},
    //     iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //     content: '<h1>Hello</h1>'
    // })
    // addMarker({coords:{lat:10.687392,lng:106.593854},
    //          content: '<h1>Hi there</h1>'
    // })

    //add marker function
    function addMarker(props){
        let marker = new google.maps.Marker({
                position:props.coords,
                map:map,
                // icon:props.iconImage,
            })
            //check for customicon
            if(props.iconImage){
                marker.setIcon(props.iconImage)
            }
            if(props.content){
                var infoWindow= new google.maps.InfoWindow({
                        content:props.content
            })
            marker.addListener('click',function(){
                infoWindow.open(map,marker);
            })
        }
           
    }
    }

   

    
  