var bands=[
    {name:"rag", image:"http://i.imgur.com/tM8UteK.png"},
     {name:"rag2", image:"http://i.imgur.com/tM7UteK.png"},
     {name:"rag3", image:"http://i.imgur.com/tM6UteK.png"},
     {name:"rag4", image:"http://i.imgur.com/tM5UteK.png"}
    ]
    
    
    /**
 * Using React 0.13.2
 * Updated 2015-04-28
 */

// var NavigationItem = React.createClass({
//     onClick: function() {
//         this.props.itemSelected(this.props.item);
//     },
//     render: function() {
//         return (
//             <li onClick={this.onClick} className={this.props.selected ? "selected" : ""}>
//                 {this.props.item.data.display_name}
//             </li>
//         );
//     }
// });

// var Navigation = React.createClass({
//     setSelectedItem: function(item) {
//         this.props.itemSelected(item);
//     },
//     render: function() {
//         var _this = this;

//         var items = this.props.items.map(function(item) {
//             return (
//                 <NavigationItem key={item.data.id}
//                     item={item} itemSelected={_this.setSelectedItem}
//                     selected={item.data.url === _this.props.activeUrl} />
//             );
//         });

//         return (
//             <div className="navigation">
//                 <div className="header">Navigation</div>
//                 <ul>
//                     {items}
//                 </ul>
//             </div>
//         );
//     }
// });

// var StoryList = React.createClass({
//     render: function() {
//         var storyNodes = this.props.items.map(function(item) {
//             return (
//                 <tr key={item.data.url}>
//                     <td>
//                         <p className="score">{item.data.score}</p>
//                     </td>
//                     <td>
//                         <p className="title">
//                             <a href={item.data.url}>
//                                 {item.data.title}
//                             </a>
//                         </p>
//                         <p className="author">
//                             Posted by <b>{item.data.author}</b>
//                         </p>
//                     </td>
//                 </tr>
//             );
//         });

//         return (
//             <table>
//                 <tbody>
//                     {storyNodes}
//                 </tbody>
//             </table>
//         );
//     }
// });

// var App = React.createClass({
//     componentDidMount: function() {
//         var _this = this;
//         var cbname = "fn" + Date.now();
//         var script = document.createElement("script");
//         script.src = "https://www.reddit.com/reddits.json?jsonp=" + cbname;

//         window[cbname] = function(jsonData) {
//             _this.setState({
//                 navigationItems: jsonData.data.children
//             });
//             delete window[cbname];
//         };

//         document.head.appendChild(script);
//     },
//     getInitialState: function() {
//         return ({
//             activeNavigationUrl: "",
//             navigationItems: [],
//             storyItems: [],
//             title: "Please select a sub"
//         });
//     },
//     render: function() {
//         return (
//             <div>
//                 <h1>{this.state.title}</h1>
//                 <Navigation activeUrl={this.state.activeNavigationUrl}
//                     items={this.state.navigationItems}
//                     itemSelected={this.setSelectedItem} />
//                 <StoryList items={this.state.storyItems} />
//             </div>
//         );
//     },
//     setSelectedItem: function(item) {
//         var _this = this;
//         var cbname = "fn" + Date.now();
//         var script = document.createElement("script");
//         script.src = "https://www.reddit.com/" + item.data.url + ".json?sort=top&t=month&jsonp=" + cbname;

//         window[cbname] = function(jsonData) {
//             _this.setState({storyItems: jsonData.data.children});
//             delete window[cbname];
//         };
        
//         document.head.appendChild(script);

//         this.setState({
//             activeNavigationUrl: item.data.url,
//             title: item.data.display_name
//         });
//     }
// });

// React.render(
//     <App />,
// document.body
// );

// var UserGist = React.createClass({
//   getInitialState: function() {
//     return {
//       username: '',
//       lastGistUrl: ''
//     };
//   },

//   componentDidMount: function() {
//     $.get(this.props.source, function(result) {
//       var lastGist = result[0];
//       if (this.isMounted()) {
//         this.setState({
//           username: lastGist.owner.login,
//           lastGistUrl: lastGist.html_url
//         });
//       }
//     }.bind(this));
//   },

//   render: function() {
//     return (
//       <div>
//         {this.state.username}'s last gist is
//         <a href={this.state.lastGistUrl}>here</a>.
//       </div>
//     );
//   }
// });

// React.render(
//   <UserGist source="https://api.github.com/users/octocat/gists" />,
//  document.getElementById('contentsss')
// );


var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: '',
       dateGistUrl:''
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var lastGist = result;
      if (this.isMounted()) {
        this.setState({
          username: lastGist.name,
          lastGistUrl: lastGist.bio,
          dateGistUrl: lastGist.date_added
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
       <h1> Name: {this.state.username}</h1>
       <h4> Bio: {this.state.lastGistUrl}.</h4>
       <h4> dateadded: {this.state.dateGistUrl}.</h4>
      </div>
    );
  }
});

React.render(
  <UserGist source="https://music-rajvansia.c9.io/band/api/1/?format=json" />,
 document.getElementById('contentsss')
);

    
//     var Myband= React.createClass({
//         getInitialState: function(){
            
//             return{
//                 mybands:[]
//             };
//         },
        
        
//   componentDidMount: function (){
//         var mybands= "https://music-rajvansia.c9.io/band/api/1/?format=json";
//         this.loadBandsFromServer=(mybands);
//     },
    
//     loadBandsFromServer: function(type,url){
//         $.ajax({
//             url:url,
//             dataType:'json',
//             sucess:function(data){
//                 this.setState({mybands:data})
//             }.bind(this),
//             error: function(xhr,status,err){
//                 console.error("error")
//             }.bind(this)
            
//               });
//     },
//     render:function(){
        
//           {this.state.mybands.map(function(myband){
//             return(
//             <div>
//          <h1>{this.state.myband.name}</h1>
//               </div>
//               )
//             })}
       
//     }
        
        
//     });
    
//     React.render(
// <Myband  data={this.state.data}/>,
// document.getElementById('contentsss')

// );
      
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
              <h1> Child {band.name} </h1>
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


// var TodoList = React.createClass({
//   render: function() {
//     var createItem = function(itemText) {
//       return <li>{itemText}</li>
//     };
//     return <ul>{this.props.items.map(createItem)}</ul>;
//   }
// });
// var TodoApp = React.createClass({
//   getInitialState: function() {
//     return {items: [], text: ''};
//   },
//   onChange: function(e) {
//     this.setState({text: e.target.value});
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var nextItems = this.state.items.concat([this.state.text]);
//     var nextText = '';
//     this.setState({items: nextItems, text: nextText});
//   },
//   render: function() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.onChange} value={this.state.text} />
//           <button>{'Add #' + (this.state.items.length + 1)}</button>
//         </form>
//       </div>
//     );
//   }
// });

// React.render(<TodoApp />, document.getElementById("contentsss"));









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