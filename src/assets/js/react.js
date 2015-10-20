/*
 * Panels
 */
var Panels = React.createClass({

  getInitialState: function() {
    return {
      countries: [],
    }
  },


  componentDidMount: function() {
    $.ajax({
      url: 'https://restcountries-v1.p.mashape.com/all',
      type: 'GET',
      data: {},
      datatype: 'json',
      success: function(countries) {

        var countries = countries;

        // console.log(countries);

        if (this.isMounted()) {
          this.setState({
            countries: countries
          })
        }

      }.bind(this), // end success
      error: function(err) {
        console.log(err);
      }.bind(this), // end error
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "J10aBMA4cAmshoCjGohz6QX42UMlp1du2X9jsnZRUQa0QLICnc");
      } // end beforeSend

    }) // end ajax
  },


  render: function() {
    return (
      <div className="panels">
        <ul className="panels__container">
        {
          this.state.countries.map(function(country) {
            // console.log(country);
            return (
              <li className="panels__item" itemID={country.name.toLowerCase().replace(/ /g, '')}>
                <h2>{country.name}</h2>
                <ul>
                  <li>Capital <span>{country.capital}</span></li>
                  <li>Alternative Spellings: {country.altSpellings}</li>
                  <li>{country.region}</li>
                </ul>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }

});




/*
 * Map
 */
L.mapbox.accessToken = 'pk.eyJ1IjoiYW9zaWthIiwiYSI6IjQzRGIxeEkifQ.7OvmyBbXwwt9Qxjlh9Qd3w';

var Map = React.createClass({


  getInitialState: function() {
    return {
      layers: '',
    }
  },


  createMap: function(element) {
    var map = L.mapbox.map(element, 'mapbox.streets');
    return map;
  },


  setupMap: function() {
    this.map.setView([this.props.lat, this.props.lon], this.props.zoom);
  },


  createLayers: function() {

    var myLayer = L.mapbox.featureLayer().addTo(this.map);

    $.getJSON('assets/data/countries.geo.json', function(data) {
      myLayer.setGeoJSON(data);

      myLayer.eachLayer(function(layer) {
        layer.on('click', function(e) {
          
          var id = $(this)[0].feature.properties.name.toLowerCase().replace(/ /g, '').slice(0, 15);
          console.log( $('[itemid='+id+']') );

          $('.panels__item').removeClass('panels__item--active');
          $('[itemid='+id+']').addClass('panels__item--active');
        })
      })

    }.bind(this));




  },

  componentDidMount: function() {
    if (this.props.createMap) {
        this.map = this.props.createMap(this.getDOMNode());
    } else {
        this.map = this.createMap(this.getDOMNode());
    }

    this.setupMap();
    this.createLayers();

  },

  onMapClick: function() {

  },

  render: function() {
    return (
      <div className='map'></div>
    )
  }

});



var Container = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Map lat="0" lon="0" zoom="2"/>
        <Panels />
      </div>
    )
  }
});


React.render(
  <Container />,
  document.getElementsByTagName('BODY')[0]
)










