(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app = require('./react.js');

app();


},{"./react.js":2}],2:[function(require,module,exports){
'use strict';

(function () {

  module.exports = function () {

    /*
     * Panels
     */
    var Panels = React.createClass({
      displayName: 'Panels',

      getInitialState: function getInitialState() {
        return {
          countries: []
        };
      },

      componentDidMount: function componentDidMount() {
        $.ajax({
          url: 'https://restcountries-v1.p.mashape.com/all',
          type: 'GET',
          data: {},
          datatype: 'json',
          success: (function (countries) {

            var countries = countries;

            if (this.isMounted()) {
              this.setState({
                countries: countries
              });
            }
          }).bind(this), // end success
          error: (function (err) {
            console.log(err);
          }).bind(this), // end error
          beforeSend: function beforeSend(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "J10aBMA4cAmshoCjGohz6QX42UMlp1du2X9jsnZRUQa0QLICnc");
          } // end beforeSend

        }).done(function () {
          $('.preloader').fadeOut(1000);
          $('.instructions').fadeIn();

          $('.panels__close').on('click', function (e) {
            e.preventDefault();
            $('.panels').css('visibility', 'hidden');

            $('.panels__item').css('display', 'none');
            $(this).css('display', 'none');
          });

          $('li[itemid="britishindianoceanterritory"]').remove();
          $('li[itemid="unitedstatesminoroutlyingislands"]').remove();
        }); // end ajax
      },

      render: function render() {
        return React.createElement(
          'div',
          { className: 'panels' },
          React.createElement(
            'a',
            { href: '#', className: 'panels__close' },
            React.createElement('img', { src: 'assets/img/close.png' })
          ),
          React.createElement(
            'ul',
            { className: 'panels__container' },
            this.state.countries.map(function (country) {
              // console.log(country);
              return React.createElement(
                'li',
                { className: 'panels__item', itemID: country.name.toLowerCase().replace(/ /g, '') },
                React.createElement(
                  'h2',
                  null,
                  country.name
                ),
                React.createElement(
                  'ul',
                  null,
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Capital'
                    ),
                    React.createElement(
                      'span',
                      null,
                      country.capital
                    )
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Alternative Spellings'
                    ),
                    country.altSpellings
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Relevance'
                    ),
                    country.relevance
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Region'
                    ),
                    country.region
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Subregion'
                    ),
                    country.subregion
                  ),
                  React.createElement(
                    'li',
                    { className: 'panels__object--noc' },
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Translations'
                    ),
                    Object.keys(country.translations).map(function (key) {
                      return React.createElement(
                        'div',
                        { className: 'translations' },
                        key,
                        ':',
                        country.translations[key]
                      );
                    })
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Population'
                    ),
                    country.population
                  ),
                  React.createElement(
                    'li',
                    { className: 'panels__object--noc' },
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Latitude, Longitude'
                    ),
                    '[',
                    country.latlng[0],
                    ', ',
                    country.latlng[1],
                    ']'
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Demonym'
                    ),
                    country.demonym
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Area'
                    ),
                    country.area
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Gini'
                    ),
                    country.gini
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Timezones'
                    ),
                    country.timezones
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Borders'
                    ),
                    country.borders
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Native Name'
                    ),
                    country.nativeName
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Calling Codes'
                    ),
                    country.callingCodes
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Top Level Domain'
                    ),
                    country.topLevelDomain
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Currencies'
                    ),
                    country.currencies
                  ),
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'span',
                      { className: 'panels__property' },
                      'Languages'
                    ),
                    country.languages
                  )
                )
              );
            })
          )
        );
      }

    });

    /*
     * Map
     */
    L.mapbox.accessToken = 'pk.eyJ1IjoiYW9zaWthIiwiYSI6IjQzRGIxeEkifQ.7OvmyBbXwwt9Qxjlh9Qd3w';

    var Map = React.createClass({
      displayName: 'Map',

      getInitialState: function getInitialState() {
        return {
          layers: ''
        };
      },

      createMap: function createMap(element) {
        var map = L.mapbox.map(element, 'mapbox.streets', { zoomControl: false });
        map.scrollWheelZoom.disable();
        return map;
      },

      setupMap: function setupMap() {
        this.map.setView([this.props.lat, this.props.lon], this.props.zoom);
      },

      createLayers: function createLayers() {

        var myLayer = L.mapbox.featureLayer().addTo(this.map);
        new L.Control.Zoom({ position: 'topright' }).addTo(this.map);

        $.getJSON('assets/data/countries.geo.json', function (data) {
          myLayer.setGeoJSON(data);

          myLayer.eachLayer(function (layer) {
            layer.on('click', function (e) {

              var id = $(this)[0].feature.properties.name.toLowerCase().replace(/ /g, '').slice(0, 12);
              console.log($('[itemid*=' + id + ']'));

              $('.instructions').fadeOut();

              $('.panels').css('visibility', 'visible');
              $('.panels__item').css('display', 'none');
              $('[itemid*=' + id + ']').css('display', 'block');

              $('.panels__close').css('display', 'block');
            });
          });
        });
      },

      componentDidMount: function componentDidMount() {
        if (this.props.createMap) {
          this.map = this.props.createMap(this.getDOMNode());
        } else {
          this.map = this.createMap(this.getDOMNode());
        }

        this.setupMap();
        this.createLayers();
      },

      onMapClick: function onMapClick() {},

      render: function render() {
        return React.createElement('div', { className: 'map' });
      }

    });

    var Container = React.createClass({
      displayName: 'Container',

      render: function render() {
        return React.createElement(
          'div',
          { className: 'container' },
          React.createElement(Map, { lat: '0', lon: '0', zoom: '3' }),
          React.createElement(Panels, null)
        );
      }
    });

    React.render(React.createElement(Container, null), document.getElementById('mount'));
  }; // end module export
})(); // end anonymous wrapper


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcd2FtcFxcd3d3XFxsYWJcXGNvdW50cnlfaW5mb1xcc3JjXFxhc3NldHNcXGpzXFxhcHAuanMiLCJDOlxcd2FtcFxcd3d3XFxsYWJcXGNvdW50cnlfaW5mb1xcc3JjXFxhc3NldHNcXGpzXFxyZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRWhDLEdBQUcsRUFBRSxDQUFDO0FBQ047OztBQ0xBLFlBQVksQ0FBQzs7QUFFYixDQUFDLFlBQVk7O0FBRWIsRUFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVk7QUFDL0I7QUFDQTtBQUNBOztJQUVJLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDbkMsTUFBTSxXQUFXLEVBQUUsUUFBUTs7TUFFckIsZUFBZSxFQUFFLFNBQVMsZUFBZSxHQUFHO1FBQzFDLE9BQU87VUFDTCxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7QUFDVixPQUFPOztNQUVELGlCQUFpQixFQUFFLFNBQVMsaUJBQWlCLEdBQUc7UUFDOUMsQ0FBQyxDQUFDLElBQUksQ0FBQztVQUNMLEdBQUcsRUFBRSw0Q0FBNEM7VUFDakQsSUFBSSxFQUFFLEtBQUs7VUFDWCxJQUFJLEVBQUUsRUFBRTtVQUNSLFFBQVEsRUFBRSxNQUFNO0FBQzFCLFVBQVUsT0FBTyxFQUFFLENBQUMsVUFBVSxTQUFTLEVBQUU7O0FBRXpDLFlBQVksSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDOztZQUUxQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtjQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNaLFNBQVMsRUFBRSxTQUFTO2VBQ3JCLENBQUMsQ0FBQzthQUNKO1dBQ0YsRUFBRSxJ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RyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1VBQzNELEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztTQUNsQyxDQUFDO09BQ0g7QUFDUCxLQUFLLENBQUMsQ0FBQzs7SUFFSCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztHQUN0RixDQUFDO0NBQ0gsR0FBRyxDQUFDLENBQUMsd0JBQXdCO0FBQzlCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IHJlcXVpcmUoJy4vcmVhY3QuanMnKTtcblxuYXBwKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtNNkwzZGhiWEF2ZDNkM0wyeGhZaTlqYjNWdWRISjVYMmx1Wm04dmMzSmpMMkZ6YzJWMGN5OXFjeTloY0hBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4SlFVRkpMRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdPMEZCUldoRExFZEJRVWNzUlVGQlJTeERRVUZESWl3aVptbHNaU0k2SWtNNkwzZGhiWEF2ZDNkM0wyeGhZaTlqYjNWdWRISjVYMmx1Wm04dmMzSmpMMkZ6YzJWMGN5OXFjeTloY0hBdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUoyWVhJZ1lYQndJRDBnY21WeGRXbHlaU2duTGk5eVpXRmpkQzVxY3ljcE8xeHlYRzVjY2x4dVlYQndLQ2s3WEhKY2JpSmRmUT09IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLypcclxuICAgICAqIFBhbmVsc1xyXG4gICAgICovXG4gICAgdmFyIFBhbmVscyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGRpc3BsYXlOYW1lOiAnUGFuZWxzJyxcblxuICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY291bnRyaWVzOiBbXVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcmVzdGNvdW50cmllcy12MS5wLm1hc2hhcGUuY29tL2FsbCcsXG4gICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgZGF0YXR5cGU6ICdqc29uJyxcbiAgICAgICAgICBzdWNjZXNzOiAoZnVuY3Rpb24gKGNvdW50cmllcykge1xuXG4gICAgICAgICAgICB2YXIgY291bnRyaWVzID0gY291bnRyaWVzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjb3VudHJpZXM6IGNvdW50cmllc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS5iaW5kKHRoaXMpLCAvLyBlbmQgc3VjY2Vzc1xuICAgICAgICAgIGVycm9yOiAoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KS5iaW5kKHRoaXMpLCAvLyBlbmQgZXJyb3JcbiAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiBiZWZvcmVTZW5kKHhocikge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLU1hc2hhcGUtQXV0aG9yaXphdGlvblwiLCBcIkoxMGFCTUE0Y0Ftc2hvQ2pHb2h6NlFYNDJVTWxwMWR1Mlg5anNuWlJVUWEwUUxJQ25jXCIpO1xuICAgICAgICAgIH0gLy8gZW5kIGJlZm9yZVNlbmRcblxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKCcucHJlbG9hZGVyJykuZmFkZU91dCgxMDAwKTtcbiAgICAgICAgICAkKCcuaW5zdHJ1Y3Rpb25zJykuZmFkZUluKCk7XG5cbiAgICAgICAgICAkKCcucGFuZWxzX19jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCcucGFuZWxzJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICAkKCcucGFuZWxzX19pdGVtJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICQoJ2xpW2l0ZW1pZD1cImJyaXRpc2hpbmRpYW5vY2VhbnRlcnJpdG9yeVwiXScpLnJlbW92ZSgpO1xuICAgICAgICAgICQoJ2xpW2l0ZW1pZD1cInVuaXRlZHN0YXRlc21pbm9yb3V0bHlpbmdpc2xhbmRzXCJdJykucmVtb3ZlKCk7XG4gICAgICAgIH0pOyAvLyBlbmQgYWpheFxuICAgICAgfSxcblxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAncGFuZWxzJyB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnYScsXG4gICAgICAgICAgICB7IGhyZWY6ICcjJywgY2xhc3NOYW1lOiAncGFuZWxzX19jbG9zZScgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiAnYXNzZXRzL2ltZy9jbG9zZS5wbmcnIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3VsJyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncGFuZWxzX19jb250YWluZXInIH0sXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNvdW50cmllcy5tYXAoZnVuY3Rpb24gKGNvdW50cnkpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY291bnRyeSk7XG4gICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwYW5lbHNfX2l0ZW0nLCBpdGVtSUQ6IGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJycpIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdoMicsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgY291bnRyeS5uYW1lXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ3VsJyxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fcHJvcGVydHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ0NhcGl0YWwnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRyeS5jYXBpdGFsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fcHJvcGVydHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ0FsdGVybmF0aXZlIFNwZWxsaW5ncydcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeS5hbHRTcGVsbGluZ3NcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fcHJvcGVydHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ1JlbGV2YW5jZSdcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeS5yZWxldmFuY2VcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fcHJvcGVydHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ1JlZ2lvbidcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeS5yZWdpb25cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fcHJvcGVydHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ1N1YnJlZ2lvbidcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeS5zdWJyZWdpb25cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fb2JqZWN0LS1ub2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncGFuZWxzX19wcm9wZXJ0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAnVHJhbnNsYXRpb25zJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb3VudHJ5LnRyYW5zbGF0aW9ucykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICd0cmFuc2xhdGlvbnMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAnOicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5LnRyYW5zbGF0aW9uc1trZXldXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fcHJvcGVydHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ1BvcHVsYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnkucG9wdWxhdGlvblxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncGFuZWxzX19vYmplY3QtLW5vYycgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwYW5lbHNfX3Byb3BlcnR5JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICdMYXRpdHVkZSwgTG9uZ2l0dWRlJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAnWycsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnkubGF0bG5nWzBdLFxuICAgICAgICAgICAgICAgICAgICAnLCAnLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5LmxhdGxuZ1sxXSxcbiAgICAgICAgICAgICAgICAgICAgJ10nXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwYW5lbHNfX3Byb3BlcnR5JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICdEZW1vbnltJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5LmRlbW9ueW1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fcHJvcGVydHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ0FyZWEnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnkuYXJlYVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncGFuZWxzX19wcm9wZXJ0eScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAnR2luaSdcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeS5naW5pXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwYW5lbHNfX3Byb3BlcnR5JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICdUaW1lem9uZXMnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnkudGltZXpvbmVzXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwYW5lbHNfX3Byb3BlcnR5JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICdCb3JkZXJzJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5LmJvcmRlcnNcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fcHJvcGVydHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ05hdGl2ZSBOYW1lJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5Lm5hdGl2ZU5hbWVcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fcHJvcGVydHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ0NhbGxpbmcgQ29kZXMnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnkuY2FsbGluZ0NvZGVzXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwYW5lbHNfX3Byb3BlcnR5JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICdUb3AgTGV2ZWwgRG9tYWluJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5LnRvcExldmVsRG9tYWluXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwYW5lbHNfX3Byb3BlcnR5JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICdDdXJyZW5jaWVzJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5LmN1cnJlbmNpZXNcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BhbmVsc19fcHJvcGVydHknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlcydcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeS5sYW5ndWFnZXNcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgLypcclxuICAgICAqIE1hcFxyXG4gICAgICovXG4gICAgTC5tYXBib3guYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2lZVzl6YVd0aElpd2lZU0k2SWpRelJHSXhlRWtpZlEuN092bXlCYlh3d3Q5UXhqbGg5UWQzdyc7XG5cbiAgICB2YXIgTWFwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgZGlzcGxheU5hbWU6ICdNYXAnLFxuXG4gICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYXllcnM6ICcnXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBjcmVhdGVNYXA6IGZ1bmN0aW9uIGNyZWF0ZU1hcChlbGVtZW50KSB7XG4gICAgICAgIHZhciBtYXAgPSBMLm1hcGJveC5tYXAoZWxlbWVudCwgJ21hcGJveC5zdHJlZXRzJywgeyB6b29tQ29udHJvbDogZmFsc2UgfSk7XG4gICAgICAgIG1hcC5zY3JvbGxXaGVlbFpvb20uZGlzYWJsZSgpO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfSxcblxuICAgICAgc2V0dXBNYXA6IGZ1bmN0aW9uIHNldHVwTWFwKCkge1xuICAgICAgICB0aGlzLm1hcC5zZXRWaWV3KFt0aGlzLnByb3BzLmxhdCwgdGhpcy5wcm9wcy5sb25dLCB0aGlzLnByb3BzLnpvb20pO1xuICAgICAgfSxcblxuICAgICAgY3JlYXRlTGF5ZXJzOiBmdW5jdGlvbiBjcmVhdGVMYXllcnMoKSB7XG5cbiAgICAgICAgdmFyIG15TGF5ZXIgPSBMLm1hcGJveC5mZWF0dXJlTGF5ZXIoKS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIG5ldyBMLkNvbnRyb2wuWm9vbSh7IHBvc2l0aW9uOiAndG9wcmlnaHQnIH0pLmFkZFRvKHRoaXMubWFwKTtcblxuICAgICAgICAkLmdldEpTT04oJ2Fzc2V0cy9kYXRhL2NvdW50cmllcy5nZW8uanNvbicsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgbXlMYXllci5zZXRHZW9KU09OKGRhdGEpO1xuXG4gICAgICAgICAgbXlMYXllci5lYWNoTGF5ZXIoZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICAgICAgICBsYXllci5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcylbMF0uZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICcnKS5zbGljZSgwLCAxMik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQoJ1tpdGVtaWQqPScgKyBpZCArICddJykpO1xuXG4gICAgICAgICAgICAgICQoJy5pbnN0cnVjdGlvbnMnKS5mYWRlT3V0KCk7XG5cbiAgICAgICAgICAgICAgJCgnLnBhbmVscycpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICQoJy5wYW5lbHNfX2l0ZW0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAkKCdbaXRlbWlkKj0nICsgaWQgKyAnXScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgICAgICAgICAgICQoJy5wYW5lbHNfX2Nsb3NlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNyZWF0ZU1hcCkge1xuICAgICAgICAgIHRoaXMubWFwID0gdGhpcy5wcm9wcy5jcmVhdGVNYXAodGhpcy5nZXRET01Ob2RlKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWFwID0gdGhpcy5jcmVhdGVNYXAodGhpcy5nZXRET01Ob2RlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXR1cE1hcCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUxheWVycygpO1xuICAgICAgfSxcblxuICAgICAgb25NYXBDbGljazogZnVuY3Rpb24gb25NYXBDbGljaygpIHt9LFxuXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnbWFwJyB9KTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgdmFyIENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGRpc3BsYXlOYW1lOiAnQ29udGFpbmVyJyxcblxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29udGFpbmVyJyB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFwLCB7IGxhdDogJzAnLCBsb246ICcwJywgem9vbTogJzMnIH0pLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFuZWxzLCBudWxsKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgUmVhY3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCBudWxsKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50JykpO1xuICB9OyAvLyBlbmQgbW9kdWxlIGV4cG9ydFxufSkoKTsgLy8gZW5kIGFub255bW91cyB3cmFwcGVyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtNNkwzZGhiWEF2ZDNkM0wyeGhZaTlqYjNWdWRISjVYMmx1Wm04dmMzSmpMMkZ6YzJWMGN5OXFjeTl5WldGamRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxFTkJRVU1zV1VGQlZ6czdRVUZGV2l4UlFVRk5MRU5CUVVNc1QwRkJUeXhIUVVGSExGbEJRVmM3T3pzN08wRkJWelZDTEZGQlFVa3NUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU03T3p0QlFVVTNRaXh4UWtGQlpTeEZRVUZGTERKQ1FVRlhPMEZCUXpGQ0xHVkJRVTg3UVVGRFRDeHRRa0ZCVXl4RlFVRkZMRVZCUVVVN1UwRkRaQ3hEUVVGQk8wOUJRMFk3TzBGQlIwUXNkVUpCUVdsQ0xFVkJRVVVzTmtKQlFWYzdRVUZETlVJc1UwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU5NTEdGQlFVY3NSVUZCUlN3MFEwRkJORU03UVVGRGFrUXNZMEZCU1N4RlFVRkZMRXRCUVVzN1FVRkRXQ3hqUVVGSkxFVkJRVVVzUlVGQlJUdEJRVU5TTEd0Q1FVRlJMRVZCUVVVc1RVRkJUVHRCUVVOb1FpeHBRa0ZCVHl4RlFVRkZMRU5CUVVFc1ZVRkJVeXhUUVVGVExFVkJRVVU3TzBGQlJUTkNMR2RDUVVGSkxGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdPMEZCUlRGQ0xHZENRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSVHRCUVVOd1FpeHJRa0ZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRCUVVOYUxIbENRVUZUTEVWQlFVVXNVMEZCVXp0bFFVTnlRaXhEUVVGRExFTkJRVUU3WVVGRFNEdFhRVVZHTEVOQlFVRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJRMW9zWlVGQlN5eEZRVUZGTEVOQlFVRXNWVUZCVXl4SFFVRkhMRVZCUVVVN1FVRkRia0lzYlVKQlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VjBGRGJFSXNRMEZCUVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03UVVGRFdpeHZRa0ZCVlN4RlFVRkZMRzlDUVVGVExFZEJRVWNzUlVGQlJUdEJRVU40UWl4bFFVRkhMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNlVUpCUVhsQ0xFVkJRVVVzYjBSQlFXOUVMRU5CUVVNc1EwRkJRenRYUVVOMlJ6czdVMEZGUml4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmM3UVVGRGFrSXNWMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTTVRaXhYUVVGRExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN08wRkJSVFZDTEZkQlFVTXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJVeXhEUVVGRExFVkJRVVU3UVVGRE1VTXNZVUZCUXl4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8wRkJRMjVDTEdGQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zV1VGQldTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPenRCUVVWNlF5eGhRVUZETEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTXhReXhoUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFhRVVZvUXl4RFFVRkRMRU5CUVVFN08wRkJSMFlzVjBGQlF5eERRVUZETERCRFFVRXdReXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdRVUZEZGtRc1YwRkJReXhEUVVGRExDdERRVUVyUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03VTBGSE4wUXNRMEZCUXl4RFFVRkRPMDlCUTBvN08wRkJSMFFzV1VGQlRTeEZRVUZGTEd0Q1FVRlhPMEZCUTJwQ0xHVkJRMFU3TzFsQlFVc3NVMEZCVXl4RlFVRkRMRkZCUVZFN1ZVRkRja0k3TzJOQlFVY3NTVUZCU1N4RlFVRkRMRWRCUVVjc1JVRkJReXhUUVVGVExFVkJRVU1zWlVGQlpUdFpRVU51UXl3MlFrRkJTeXhIUVVGSExFVkJRVU1zYzBKQlFYTkNMRWRCUVVjN1YwRkRhRU03VlVGRFNqczdZMEZCU1N4VFFVRlRMRVZCUVVNc2JVSkJRVzFDTzFsQlJTOUNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlRMRTlCUVU4c1JVRkJSVHM3UVVGRmVrTXNjVUpCUTBVN08ydENRVUZKTEZOQlFWTXNSVUZCUXl4alFVRmpMRVZCUVVNc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRVUZCUXp0blFrRkRhRVk3T3p0clFrRkJTeXhQUVVGUExFTkJRVU1zU1VGQlNUdHBRa0ZCVFR0blFrRkRka0k3T3p0clFrRkRSVHM3TzI5Q1FVTkZPenQzUWtGQlRTeFRRVUZUTEVWQlFVTXNhMEpCUVd0Q096dHhRa0ZCWlR0dlFrRkRha1E3T3p0elFrRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR6dHhRa0ZCVVR0dFFrRkRNMEk3YTBKQlEwdzdPenR2UWtGQlNUczdkMEpCUVUwc1UwRkJVeXhGUVVGRExHdENRVUZyUWpzN2NVSkJRVFpDTzI5Q1FVRkRMRTlCUVU4c1EwRkJReXhaUVVGWk8yMUNRVUZOTzJ0Q1FVTTVSanM3TzI5Q1FVRkpPenQzUWtGQlRTeFRRVUZUTEVWQlFVTXNhMEpCUVd0Q096dHhRa0ZCYVVJN2IwSkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTTdiVUpCUVUwN2EwSkJReTlGT3pzN2IwSkJRVWs3TzNkQ1FVRk5MRk5CUVZNc1JVRkJReXhyUWtGQmEwSTdPM0ZDUVVGak8yOUNRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5PMjFDUVVGTk8ydENRVU42UlRzN08yOUNRVUZKT3p0M1FrRkJUU3hUUVVGVExFVkJRVU1zYTBKQlFXdENPenR4UWtGQmFVSTdiMEpCUVVNc1QwRkJUeXhEUVVGRExGTkJRVk03YlVKQlFVMDdhMEpCUXk5Rk96dHpRa0ZCU1N4VFFVRlRMRVZCUVVNc2NVSkJRWEZDTzI5Q1FVRkRPenQzUWtGQlRTeFRRVUZUTEVWQlFVTXNhMEpCUVd0Q096dHhRa0ZCYjBJN2IwSkJRM1pHTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlRMRWRCUVVjc1JVRkJSVHRCUVVOcVJDdzJRa0ZCVHpzN01FSkJRVXNzVTBGQlV5eEZRVUZETEdOQlFXTTdkMEpCUVVVc1IwRkJSenM3ZDBKQlFVY3NUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU03ZFVKQlFVOHNRMEZCUXp0eFFrRkRhRVlzUTBGQlF6dHRRa0ZEUXp0clFrRkRURHM3TzI5Q1FVRkpPenQzUWtGQlRTeFRRVUZUTEVWQlFVTXNhMEpCUVd0Q096dHhRa0ZCYTBJN2IwSkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVTdiVUpCUVUwN2EwSkJRMnBHT3p0elFrRkJTU3hUUVVGVExFVkJRVU1zY1VKQlFYRkNPMjlDUVVGRE96dDNRa0ZCVFN4VFFVRlRMRVZCUVVNc2EwSkJRV3RDT3p0eFFrRkJNa0k3TzI5Q1FVRkZMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZET3p0dlFrRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXpzN2JVSkJRVTg3YTBKQlEyaEtPenM3YjBKQlFVazdPM2RDUVVGTkxGTkJRVk1zUlVGQlF5eHJRa0ZCYTBJN08zRkNRVUZsTzI5Q1FVRkRMRTlCUVU4c1EwRkJReXhQUVVGUE8yMUNRVUZOTzJ0Q1FVTXpSVHM3TzI5Q1FVRkpPenQzUWtGQlRTeFRRVUZUTEVWQlFVTXNhMEpCUVd0Q096dHhRa0ZCV1R0dlFrRkJReXhQUVVGUExFTkJRVU1zU1VGQlNUdHRRa0ZCVFR0clFrRkRja1U3T3p0dlFrRkJTVHM3ZDBKQlFVMHNVMEZCVXl4RlFVRkRMR3RDUVVGclFqczdjVUpCUVZrN2IwSkJRVU1zVDBGQlR5eERRVUZETEVsQlFVazdiVUpCUVUwN2EwSkJRM0pGT3pzN2IwSkJRVWs3TzNkQ1FVRk5MRk5CUVZNc1JVRkJReXhyUWtGQmEwSTdPM0ZDUVVGcFFqdHZRa0ZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenR0UWtGQlRUdHJRa0ZETDBVN096dHZRa0ZCU1RzN2QwSkJRVTBzVTBGQlV5eEZRVUZETEd0Q1FVRnJRanM3Y1VKQlFXVTdiMEpCUVVNc1QwRkJUeXhEUVVGRExFOUJRVTg3YlVKQlFVMDdhMEpCUXpORk96czdiMEpCUVVrN08zZENRVUZOTEZOQlFWTXNSVUZCUXl4clFrRkJhMEk3TzNGQ1FVRnRRanR2UWtGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlR0dFFrRkJUVHRyUWtGRGJFWTdPenR2UWtGQlNUczdkMEpCUVUwc1UwRkJVeXhGUVVGRExHdENRVUZyUWpzN2NVSkJRWEZDTzI5Q1FVRkRMRTlCUVU4c1EwRkJReXhaUVVGWk8yMUNRVUZOTzJ0Q1FVTjBSanM3TzI5Q1FVRkpPenQzUWtGQlRTeFRRVUZUTEVWQlFVTXNhMEpCUVd0Q096dHhRa0ZCZDBJN2IwSkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTTdiVUpCUVUwN2EwSkJRek5HT3pzN2IwSkJRVWs3TzNkQ1FVRk5MRk5CUVZNc1JVRkJReXhyUWtGQmEwSTdPM0ZDUVVGclFqdHZRa0ZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWVHR0UWtGQlRUdHJRa0ZEYWtZN096dHZRa0ZCU1RzN2QwSkJRVTBzVTBGQlV5eEZRVUZETEd0Q1FVRnJRanM3Y1VKQlFXbENPMjlDUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTzIxQ1FVRk5PMmxDUVVNMVJUdGxRVU5HTEVOQlEwNDdZVUZEUml4RFFVRkRPMWRCUlVNN1UwRkRSQ3hEUVVOUU8wOUJRMFk3TzB0QlJVWXNRMEZCUXl4RFFVRkRPenM3T3p0QlFWRklMRXRCUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEhRVUZITEd0RlFVRnJSU3hEUVVGRE96dEJRVVV4Uml4UlFVRkpMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZET3pzN1FVRkhNVUlzY1VKQlFXVXNSVUZCUlN3eVFrRkJWenRCUVVNeFFpeGxRVUZQTzBGQlEwd3NaMEpCUVUwc1JVRkJSU3hGUVVGRk8xTkJRMWdzUTBGQlFUdFBRVU5HT3p0QlFVZEVMR1ZCUVZNc1JVRkJSU3h0UWtGQlV5eFBRVUZQTEVWQlFVVTdRVUZETTBJc1dVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRVZCUVVVc1YwRkJWeXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETVVVc1YwRkJSeXhEUVVGRExHVkJRV1VzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0QlFVTTVRaXhsUVVGUExFZEJRVWNzUTBGQlF6dFBRVU5hT3p0QlFVZEVMR05CUVZFc1JVRkJSU3h2UWtGQlZ6dEJRVU51UWl4WlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UFFVTnlSVHM3UVVGSFJDeHJRa0ZCV1N4RlFVRkZMSGRDUVVGWE96dEJRVVYyUWl4WlFVRkpMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZEVRc1dVRkJTU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkRMRkZCUVZFc1JVRkJSU3hWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJUVkVMRk5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zWjBOQlFXZERMRVZCUVVVc1ZVRkJVeXhKUVVGSkxFVkJRVVU3UVVGRGVrUXNhVUpCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdPMEZCUlhwQ0xHbENRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRlZCUVZNc1MwRkJTeXhGUVVGRk8wRkJRMmhETEdsQ1FVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZUTEVOQlFVTXNSVUZCUlRzN1FVRkZOVUlzYTBKQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRGVrWXNjVUpCUVU4c1EwRkJReXhIUVVGSExFTkJRVVVzUTBGQlF5eERRVUZETEZkQlFWY3NSMEZCUXl4RlFVRkZMRWRCUVVNc1IwRkJSeXhEUVVGRExFTkJRVVVzUTBGQlF6czdRVUZGY2tNc1pVRkJReXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPenRCUVVVM1FpeGxRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExGbEJRVmtzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0QlFVTXhReXhsUVVGRExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU14UXl4bFFVRkRMRU5CUVVNc1YwRkJWeXhIUVVGRExFVkJRVVVzUjBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZET3p0QlFVYzVReXhsUVVGRExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMkZCUlRkRExFTkJRVU1zUTBGQlFUdFhRVU5JTEVOQlFVTXNRMEZCUVR0VFFVVklMRU5CUVVNc1EwRkJRVHRQUVV0SU96dEJRVVZFTEhWQ1FVRnBRaXhGUVVGRkxEWkNRVUZYTzBGQlF6VkNMRmxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVWQlFVVTdRVUZEZEVJc1kwRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjBSQ3hOUVVGTk8wRkJRMGdzWTBGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTJoRU96dEJRVVZFTEZsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRCUVVOb1FpeFpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN1QwRkZja0k3TzBGQlJVUXNaMEpCUVZVc1JVRkJSU3h6UWtGQlZ5eEZRVVYwUWpzN1FVRkZSQ3haUVVGTkxFVkJRVVVzYTBKQlFWYzdRVUZEYWtJc1pVRkRSU3cyUWtGQlN5eFRRVUZUTEVWQlFVTXNTMEZCU3l4SFFVRlBMRU5CUXpWQ08wOUJRMFk3TzB0QlJVWXNRMEZCUXl4RFFVRkRPenRCUVVsSUxGRkJRVWtzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNN096dEJRVU5vUXl4WlFVRk5MRVZCUVVVc2EwSkJRVmM3UVVGRGFrSXNaVUZEUlRzN1dVRkJTeXhUUVVGVExFVkJRVU1zVjBGQlZ6dFZRVU40UWl4dlFrRkJReXhIUVVGSExFbEJRVU1zUjBGQlJ5eEZRVUZETEVkQlFVY3NSVUZCUXl4SFFVRkhMRVZCUVVNc1IwRkJSeXhGUVVGRExFbEJRVWtzUlVGQlF5eEhRVUZITEVkQlFVVTdWVUZETDBJc2IwSkJRVU1zVFVGQlRTeFBRVUZITzFOQlEwNHNRMEZEVUR0UFFVTkdPMHRCUTBZc1EwRkJReXhEUVVGRE96dEJRVWRJTEZOQlFVc3NRMEZCUXl4TlFVRk5MRU5CUTFZc2IwSkJRVU1zVTBGQlV5eFBRVUZITEVWQlEySXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGRGFrTXNRMEZCUVR0SFFVOUJMRU5CUVVFN1EwRkxRU3hEUVVGQkxFVkJRVWNzUTBGQlFTSXNJbVpwYkdVaU9pSkRPaTkzWVcxd0wzZDNkeTlzWVdJdlkyOTFiblJ5ZVY5cGJtWnZMM055WXk5aGMzTmxkSE12YW5NdmNtVmhZM1F1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNG9LU0I3WEhKY2JseHlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNWNjbHh1WEhKY2JseHlYRzVjY2x4dVhISmNibHh5WEc1Y2NseHVMeXBjY2x4dUlDb2dVR0Z1Wld4elhISmNiaUFxTDF4eVhHNTJZWElnVUdGdVpXeHpJRDBnVW1WaFkzUXVZM0psWVhSbFEyeGhjM01vZTF4eVhHNWNjbHh1SUNCblpYUkpibWwwYVdGc1UzUmhkR1U2SUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzRnSUNBZ2NtVjBkWEp1SUh0Y2NseHVJQ0FnSUNBZ1kyOTFiblJ5YVdWek9pQmJYU3hjY2x4dUlDQWdJSDFjY2x4dUlDQjlMRnh5WEc1Y2NseHVYSEpjYmlBZ1kyOXRjRzl1Wlc1MFJHbGtUVzkxYm5RNklHWjFibU4wYVc5dUtDa2dlMXh5WEc0Z0lDQWdKQzVoYW1GNEtIdGNjbHh1SUNBZ0lDQWdkWEpzT2lBbmFIUjBjSE02THk5eVpYTjBZMjkxYm5SeWFXVnpMWFl4TG5BdWJXRnphR0Z3WlM1amIyMHZZV3hzSnl4Y2NseHVJQ0FnSUNBZ2RIbHdaVG9nSjBkRlZDY3NYSEpjYmlBZ0lDQWdJR1JoZEdFNklIdDlMRnh5WEc0Z0lDQWdJQ0JrWVhSaGRIbHdaVG9nSjJwemIyNG5MRnh5WEc0Z0lDQWdJQ0J6ZFdOalpYTnpPaUJtZFc1amRHbHZiaWhqYjNWdWRISnBaWE1wSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHTnZkVzUwY21sbGN5QTlJR052ZFc1MGNtbGxjenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVhWE5OYjNWdWRHVmtLQ2twSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBVM1JoZEdVb2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIzVnVkSEpwWlhNNklHTnZkVzUwY21sbGMxeHlYRzRnSUNBZ0lDQWdJQ0FnZlNsY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNCOUxtSnBibVFvZEdocGN5a3NJQzh2SUdWdVpDQnpkV05qWlhOelhISmNiaUFnSUNBZ0lHVnljbTl5T2lCbWRXNWpkR2x2YmlobGNuSXBJSHRjY2x4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG14dlp5aGxjbklwTzF4eVhHNGdJQ0FnSUNCOUxtSnBibVFvZEdocGN5a3NJQzh2SUdWdVpDQmxjbkp2Y2x4eVhHNGdJQ0FnSUNCaVpXWnZjbVZUWlc1a09pQm1kVzVqZEdsdmJpaDRhSElwSUh0Y2NseHVJQ0FnSUNBZ0lDQjRhSEl1YzJWMFVtVnhkV1Z6ZEVobFlXUmxjaWhjSWxndFRXRnphR0Z3WlMxQmRYUm9iM0pwZW1GMGFXOXVYQ0lzSUZ3aVNqRXdZVUpOUVRSalFXMXphRzlEYWtkdmFIbzJVVmcwTWxWTmJIQXhaSFV5V0RscWMyNWFVbFZSWVRCUlRFbERibU5jSWlrN1hISmNiaUFnSUNBZ0lIMGdMeThnWlc1a0lHSmxabTl5WlZObGJtUmNjbHh1WEhKY2JpQWdJQ0I5S1M1a2IyNWxLR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJQ0FnSUNBa0tDY3VjSEpsYkc5aFpHVnlKeWt1Wm1Ga1pVOTFkQ2d4TURBd0tUdGNjbHh1SUNBZ0lDQWdKQ2duTG1sdWMzUnlkV04wYVc5dWN5Y3BMbVpoWkdWSmJpZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0pDZ25MbkJoYm1Wc2MxOWZZMnh2YzJVbktTNXZiaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaWhsS1NCN1hISmNiaUFnSUNBZ0lDQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNRb0p5NXdZVzVsYkhNbktTNWpjM01vSjNacGMybGlhV3hwZEhrbkxDQW5hR2xrWkdWdUp5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDUW9KeTV3WVc1bGJITmZYMmwwWlcwbktTNWpjM01vSjJScGMzQnNZWGtuTENBbmJtOXVaU2NwTzF4eVhHNGdJQ0FnSUNBZ0lDUW9kR2hwY3lrdVkzTnpLQ2RrYVhOd2JHRjVKeXdnSjI1dmJtVW5LVHRjY2x4dVhISmNiaUFnSUNBZ0lIMHBYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDQWdKQ2duYkdsYmFYUmxiV2xrUFZ3aVluSnBkR2x6YUdsdVpHbGhibTlqWldGdWRHVnljbWwwYjNKNVhDSmRKeWt1Y21WdGIzWmxLQ2s3WEhKY2JpQWdJQ0FnSUNRb0oyeHBXMmwwWlcxcFpEMWNJblZ1YVhSbFpITjBZWFJsYzIxcGJtOXliM1YwYkhscGJtZHBjMnhoYm1SelhDSmRKeWt1Y21WdGIzWmxLQ2s3WEhKY2JseHlYRzVjY2x4dUlDQWdJSDBwT3lBdkx5QmxibVFnWVdwaGVGeHlYRzRnSUgwc1hISmNibHh5WEc1Y2NseHVJQ0J5Wlc1a1pYSTZJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJQ2hjY2x4dUlDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0p3WVc1bGJITmNJajVjY2x4dUlDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aUkxd2lJR05zWVhOelRtRnRaVDFjSW5CaGJtVnNjMTlmWTJ4dmMyVmNJajVjY2x4dUlDQWdJQ0FnSUNBZ0lEeHBiV2NnYzNKalBWd2lZWE56WlhSekwybHRaeTlqYkc5elpTNXdibWRjSWlBdlBseHlYRzRnSUNBZ0lDQWdJRHd2WVQ1Y2NseHVJQ0FnSUNBZ0lDQThkV3dnWTJ4aGMzTk9ZVzFsUFZ3aWNHRnVaV3h6WDE5amIyNTBZV2x1WlhKY0lqNWNjbHh1SUNBZ0lDQWdJQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxMbU52ZFc1MGNtbGxjeTV0WVhBb1puVnVZM1JwYjI0b1kyOTFiblJ5ZVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QmpiMjV6YjJ4bExteHZaeWhqYjNWdWRISjVLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlDaGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnWTJ4aGMzTk9ZVzFsUFZ3aWNHRnVaV3h6WDE5cGRHVnRYQ0lnYVhSbGJVbEVQWHRqYjNWdWRISjVMbTVoYldVdWRHOU1iM2RsY2tOaGMyVW9LUzV5WlhCc1lXTmxLQzhnTDJjc0lDY25LWDArWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFESStlMk52ZFc1MGNua3VibUZ0WlgwOEwyZ3lQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhWc1BseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNOT1lXMWxQVndpY0dGdVpXeHpYMTl3Y205d1pYSjBlVndpUGtOaGNHbDBZV3c4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITndZVzQrZTJOdmRXNTBjbmt1WTJGd2FYUmhiSDA4TDNOd1lXNCtYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FUNDhjM0JoYmlCamJHRnpjMDVoYldVOVhDSndZVzVsYkhOZlgzQnliM0JsY25SNVhDSStRV3gwWlhKdVlYUnBkbVVnVTNCbGJHeHBibWR6UEM5emNHRnVQbnRqYjNWdWRISjVMbUZzZEZOd1pXeHNhVzVuYzMwOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHaytQSE53WVc0Z1kyeGhjM05PWVcxbFBWd2ljR0Z1Wld4elgxOXdjbTl3WlhKMGVWd2lQbEpsYkdWMllXNWpaVHd2YzNCaGJqNTdZMjkxYm5SeWVTNXlaV3hsZG1GdVkyVjlQQzlzYVQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwUGp4emNHRnVJR05zWVhOelRtRnRaVDFjSW5CaGJtVnNjMTlmY0hKdmNHVnlkSGxjSWo1U1pXZHBiMjQ4TDNOd1lXNCtlMk52ZFc1MGNua3VjbVZuYVc5dWZUd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDQ4YzNCaGJpQmpiR0Z6YzA1aGJXVTlYQ0p3WVc1bGJITmZYM0J5YjNCbGNuUjVYQ0krVTNWaWNtVm5hVzl1UEM5emNHRnVQbnRqYjNWdWRISjVMbk4xWW5KbFoybHZibjA4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM05PWVcxbFBWd2ljR0Z1Wld4elgxOXZZbXBsWTNRdExXNXZZMXdpUGp4emNHRnVJR05zWVhOelRtRnRaVDFjSW5CaGJtVnNjMTlmY0hKdmNHVnlkSGxjSWo1VWNtRnVjMnhoZEdsdmJuTThMM053WVc0K1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTA5aWFtVmpkQzVyWlhsektHTnZkVzUwY25rdWRISmhibk5zWVhScGIyNXpLUzV0WVhBb1puVnVZM1JwYjI0b2EyVjVLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUE4WkdsMklHTnNZWE56VG1GdFpUMWNJblJ5WVc1emJHRjBhVzl1YzF3aVBudHJaWGw5T250amIzVnVkSEo1TG5SeVlXNXpiR0YwYVc5dWMxdHJaWGxkZlR3dlpHbDJQanRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLWDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBQanh6Y0dGdUlHTnNZWE56VG1GdFpUMWNJbkJoYm1Wc2MxOWZjSEp2Y0dWeWRIbGNJajVRYjNCMWJHRjBhVzl1UEM5emNHRnVQbnRqYjNWdWRISjVMbkJ2Y0hWc1lYUnBiMjU5UEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElHTnNZWE56VG1GdFpUMWNJbkJoYm1Wc2MxOWZiMkpxWldOMExTMXViMk5jSWo0OGMzQmhiaUJqYkdGemMwNWhiV1U5WENKd1lXNWxiSE5mWDNCeWIzQmxjblI1WENJK1RHRjBhWFIxWkdVc0lFeHZibWRwZEhWa1pUd3ZjM0JoYmo1YmUyTnZkVzUwY25rdWJHRjBiRzVuV3pCZGZTd2dlMk52ZFc1MGNua3ViR0YwYkc1bld6RmRmVjA4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BITndZVzRnWTJ4aGMzTk9ZVzFsUFZ3aWNHRnVaV3h6WDE5d2NtOXdaWEowZVZ3aVBrUmxiVzl1ZVcwOEwzTndZVzQrZTJOdmRXNTBjbmt1WkdWdGIyNTViWDA4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BITndZVzRnWTJ4aGMzTk9ZVzFsUFZ3aWNHRnVaV3h6WDE5d2NtOXdaWEowZVZ3aVBrRnlaV0U4TDNOd1lXNCtlMk52ZFc1MGNua3VZWEpsWVgwOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHaytQSE53WVc0Z1kyeGhjM05PWVcxbFBWd2ljR0Z1Wld4elgxOXdjbTl3WlhKMGVWd2lQa2RwYm1rOEwzTndZVzQrZTJOdmRXNTBjbmt1WjJsdWFYMDhMMnhwUGx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2srUEhOd1lXNGdZMnhoYzNOT1lXMWxQVndpY0dGdVpXeHpYMTl3Y205d1pYSjBlVndpUGxScGJXVjZiMjVsY3p3dmMzQmhiajU3WTI5MWJuUnllUzUwYVcxbGVtOXVaWE45UEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBqeHpjR0Z1SUdOc1lYTnpUbUZ0WlQxY0luQmhibVZzYzE5ZmNISnZjR1Z5ZEhsY0lqNUNiM0prWlhKelBDOXpjR0Z1UG50amIzVnVkSEo1TG1KdmNtUmxjbk45UEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBqeHpjR0Z1SUdOc1lYTnpUbUZ0WlQxY0luQmhibVZzYzE5ZmNISnZjR1Z5ZEhsY0lqNU9ZWFJwZG1VZ1RtRnRaVHd2YzNCaGJqNTdZMjkxYm5SeWVTNXVZWFJwZG1WT1lXMWxmVHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVQ0OGMzQmhiaUJqYkdGemMwNWhiV1U5WENKd1lXNWxiSE5mWDNCeWIzQmxjblI1WENJK1EyRnNiR2x1WnlCRGIyUmxjend2YzNCaGJqNTdZMjkxYm5SeWVTNWpZV3hzYVc1blEyOWtaWE45UEM5c2FUNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBqeHpjR0Z1SUdOc1lYTnpUbUZ0WlQxY0luQmhibVZzYzE5ZmNISnZjR1Z5ZEhsY0lqNVViM0FnVEdWMlpXd2dSRzl0WVdsdVBDOXpjR0Z1UG50amIzVnVkSEo1TG5SdmNFeGxkbVZzUkc5dFlXbHVmVHd2YkdrK1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVQ0OGMzQmhiaUJqYkdGemMwNWhiV1U5WENKd1lXNWxiSE5mWDNCeWIzQmxjblI1WENJK1EzVnljbVZ1WTJsbGN6d3ZjM0JoYmo1N1kyOTFiblJ5ZVM1amRYSnlaVzVqYVdWemZUd3ZiR2srWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDQ4YzNCaGJpQmpiR0Z6YzA1aGJXVTlYQ0p3WVc1bGJITmZYM0J5YjNCbGNuUjVYQ0krVEdGdVozVmhaMlZ6UEM5emNHRnVQbnRqYjNWdWRISjVMbXhoYm1kMVlXZGxjMzA4TDJ4cFBseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzkxYkQ1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXBYSEpjYmlBZ0lDQWdJQ0FnSUNCOUtWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBOEwzVnNQbHh5WEc0Z0lDQWdJQ0E4TDJScGRqNWNjbHh1SUNBZ0lDbGNjbHh1SUNCOVhISmNibHh5WEc1OUtUdGNjbHh1WEhKY2JseHlYRzVjY2x4dVhISmNiaThxWEhKY2JpQXFJRTFoY0Z4eVhHNGdLaTljY2x4dVRDNXRZWEJpYjNndVlXTmpaWE56Vkc5clpXNGdQU0FuY0dzdVpYbEtNVWxxYjJsWlZ6bDZZVmQwYUVscGQybFpVMGsyU1dwUmVsSkhTWGhsUld0cFpsRXVOMDkyYlhsQ1lsaDNkM1E1VVhocWJHZzVVV1F6ZHljN1hISmNibHh5WEc1MllYSWdUV0Z3SUQwZ1VtVmhZM1F1WTNKbFlYUmxRMnhoYzNNb2UxeHlYRzVjY2x4dVhISmNiaUFnWjJWMFNXNXBkR2xoYkZOMFlYUmxPaUJtZFc1amRHbHZiaWdwSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUI3WEhKY2JpQWdJQ0FnSUd4aGVXVnljem9nSnljc1hISmNiaUFnSUNCOVhISmNiaUFnZlN4Y2NseHVYSEpjYmx4eVhHNGdJR055WldGMFpVMWhjRG9nWm5WdVkzUnBiMjRvWld4bGJXVnVkQ2tnZTF4eVhHNGdJQ0FnZG1GeUlHMWhjQ0E5SUV3dWJXRndZbTk0TG0xaGNDaGxiR1Z0Wlc1MExDQW5iV0Z3WW05NExuTjBjbVZsZEhNbkxDQjdJSHB2YjIxRGIyNTBjbTlzT2lCbVlXeHpaU0I5S1R0Y2NseHVJQ0FnSUcxaGNDNXpZM0p2Ykd4WGFHVmxiRnB2YjIwdVpHbHpZV0pzWlNncE8xeHlYRzRnSUNBZ2NtVjBkWEp1SUcxaGNEdGNjbHh1SUNCOUxGeHlYRzVjY2x4dVhISmNiaUFnYzJWMGRYQk5ZWEE2SUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzRnSUNBZ2RHaHBjeTV0WVhBdWMyVjBWbWxsZHloYmRHaHBjeTV3Y205d2N5NXNZWFFzSUhSb2FYTXVjSEp2Y0hNdWJHOXVYU3dnZEdocGN5NXdjbTl3Y3k1NmIyOXRLVHRjY2x4dUlDQjlMRnh5WEc1Y2NseHVYSEpjYmlBZ1kzSmxZWFJsVEdGNVpYSnpPaUJtZFc1amRHbHZiaWdwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYlhsTVlYbGxjaUE5SUV3dWJXRndZbTk0TG1abFlYUjFjbVZNWVhsbGNpZ3BMbUZrWkZSdktIUm9hWE11YldGd0tUdGNjbHh1SUNBZ0lHNWxkeUJNTGtOdmJuUnliMnd1V205dmJTaDdjRzl6YVhScGIyNDZJQ2QwYjNCeWFXZG9kQ2NnZlNrdVlXUmtWRzhvZEdocGN5NXRZWEFwTzF4eVhHNWNjbHh1SUNBZ0lDUXVaMlYwU2xOUFRpZ25ZWE56WlhSekwyUmhkR0V2WTI5MWJuUnlhV1Z6TG1kbGJ5NXFjMjl1Snl3Z1puVnVZM1JwYjI0b1pHRjBZU2tnZTF4eVhHNGdJQ0FnSUNCdGVVeGhlV1Z5TG5ObGRFZGxiMHBUVDA0b1pHRjBZU2s3WEhKY2JseHlYRzRnSUNBZ0lDQnRlVXhoZVdWeUxtVmhZMmhNWVhsbGNpaG1kVzVqZEdsdmJpaHNZWGxsY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJR3hoZVdWeUxtOXVLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVLR1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR2xrSUQwZ0pDaDBhR2x6S1Zzd1hTNW1aV0YwZFhKbExuQnliM0JsY25ScFpYTXVibUZ0WlM1MGIweHZkMlZ5UTJGelpTZ3BMbkpsY0d4aFkyVW9MeUF2Wnl3Z0p5Y3BMbk5zYVdObEtEQXNJREV5S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0NBa0tDZGJhWFJsYldsa0tqMG5LMmxrS3lkZEp5a2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FrS0NjdWFXNXpkSEoxWTNScGIyNXpKeWt1Wm1Ga1pVOTFkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNRb0p5NXdZVzVsYkhNbktTNWpjM01vSjNacGMybGlhV3hwZEhrbkxDQW5kbWx6YVdKc1pTY3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0pDZ25MbkJoYm1Wc2MxOWZhWFJsYlNjcExtTnpjeWduWkdsemNHeGhlU2NzSUNkdWIyNWxKeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWtLQ2RiYVhSbGJXbGtLajBuSzJsa0t5ZGRKeWt1WTNOektDZGthWE53YkdGNUp5d2dKMkpzYjJOckp5azdYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNRb0p5NXdZVzVsYkhOZlgyTnNiM05sSnlrdVkzTnpLQ2RrYVhOd2JHRjVKeXdnSjJKc2IyTnJKeWs3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBwWEhKY2JpQWdJQ0FnSUgwcFhISmNibHh5WEc0Z0lDQWdmU2xjY2x4dVhISmNibHh5WEc1Y2NseHVYSEpjYmlBZ2ZTeGNjbHh1WEhKY2JpQWdZMjl0Y0c5dVpXNTBSR2xrVFc5MWJuUTZJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tIUm9hWE11Y0hKdmNITXVZM0psWVhSbFRXRndLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV0WVhBZ1BTQjBhR2x6TG5CeWIzQnpMbU55WldGMFpVMWhjQ2gwYUdsekxtZGxkRVJQVFU1dlpHVW9LU2s3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV0Z3SUQwZ2RHaHBjeTVqY21WaGRHVk5ZWEFvZEdocGN5NW5aWFJFVDAxT2IyUmxLQ2twTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIUm9hWE11YzJWMGRYQk5ZWEFvS1R0Y2NseHVJQ0FnSUhSb2FYTXVZM0psWVhSbFRHRjVaWEp6S0NrN1hISmNibHh5WEc0Z0lIMHNYSEpjYmx4eVhHNGdJRzl1VFdGd1EyeHBZMnM2SUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzVjY2x4dUlDQjlMRnh5WEc1Y2NseHVJQ0J5Wlc1a1pYSTZJR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJQ2hjY2x4dUlDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlKMjFoY0NjK1BDOWthWFkrWEhKY2JpQWdJQ0FwWEhKY2JpQWdmVnh5WEc1Y2NseHVmU2s3WEhKY2JseHlYRzVjY2x4dVhISmNiblpoY2lCRGIyNTBZV2x1WlhJZ1BTQlNaV0ZqZEM1amNtVmhkR1ZEYkdGemN5aDdYSEpjYmlBZ2NtVnVaR1Z5T2lCbWRXNWpkR2x2YmlncElIdGNjbHh1SUNBZ0lISmxkSFZ5YmlBb1hISmNiaUFnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aVkyOXVkR0ZwYm1WeVhDSStYSEpjYmlBZ0lDQWdJQ0FnUEUxaGNDQnNZWFE5WENJd1hDSWdiRzl1UFZ3aU1Gd2lJSHB2YjIwOVhDSXpYQ0l2UGx4eVhHNGdJQ0FnSUNBZ0lEeFFZVzVsYkhNZ0x6NWNjbHh1SUNBZ0lDQWdQQzlrYVhZK1hISmNiaUFnSUNBcFhISmNiaUFnZlZ4eVhHNTlLVHRjY2x4dVhISmNibHh5WEc1U1pXRmpkQzV5Wlc1a1pYSW9YSEpjYmlBZ1BFTnZiblJoYVc1bGNpQXZQaXhjY2x4dUlDQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmJXOTFiblFuS1Z4eVhHNHBYSEpjYmx4eVhHNWNjbHh1WEhKY2JseHlYRzVjY2x4dVhISmNibjBnTHk4Z1pXNWtJRzF2WkhWc1pTQmxlSEJ2Y25SY2NseHVYSEpjYmx4eVhHNWNjbHh1WEhKY2JuMHBLQ2tnTHk4Z1pXNWtJR0Z1YjI1NWJXOTFjeUIzY21Gd2NHVnlYSEpjYmx4eVhHNWNjbHh1WEhKY2JseHlYRzVjY2x4dUlsMTkiXX0=
