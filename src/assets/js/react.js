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

        console.log(countries);

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
      <ul className="panels__container">
      {
        this.state.countries.map(function(country) {
          console.log(country);
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
    )
  }

});


React.render(

  <Panels />,
  document.getElementById('panels')

)