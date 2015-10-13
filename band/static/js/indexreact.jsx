var bands=[
    {name:"rag", image:"http://i.imgur.com/tM8UteK.png"},
     {name:"rag2", image:"http://i.imgur.com/tM7UteK.png"},
     {name:"rag3", image:"http://i.imgur.com/tM6UteK.png"},
     {name:"rag4", image:"http://i.imgur.com/tM5UteK.png"}
    ]
      
      var ExampleApplication = React.createClass({
        render: function() {
          var elapsed = Math.round(this.props.elapsed  / 100);
          var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
          var message =
            'React has been successfully running for ' + seconds + ' seconds.';

          return <p>{message}</p>;
        }
      });
      var start = new Date().getTime();
      setInterval(function() {
        React.render(
          <ExampleApplication elapsed={new Date().getTime() - start} />,
          document.getElementById('content')
        );
      }, 50);
    
    
    var BandComponent=React.createClass({
        getInitialState: function(){
            return {customText:""};
        },
  customClickFunction:function(){
    alert("you clicked this nigga")
    this.setState({customText: 'You clicked it nigga'});
  },
    render: function(){
      var testStyle={fontSize: '18px' ,color:'green'}
        return(
          <div style={testStyle}>
          <h1>{this.state.customText}</h1>
            <button onClick={this.customClickFunction}>Click Me!!</button>
            {this.props.bands.map(function(band){
            return(
            <div>
              <h1> name={band.name} </h1>
              <img src={band.image} />
              </div>
              )
            })}
          
          </div>
            )

    }

});
React.render(
<BandComponent  bands={bands}/>,
document.getElementById('contents')

)
// var Band=React.createClass({
//     render: function(){
//         return(
//             <div>
//             <h2>Raj</h2>
//             <img src="https://facebook.github.io/react/img/logo.svg" />
//             </div>
//             )
//     }
// });

// React.render(
// <Band  />,
// document.getElementById('contentss')

// )



//everyword caps
//render always returns somthing need parent child relationhip