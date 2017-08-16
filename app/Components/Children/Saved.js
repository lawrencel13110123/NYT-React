// Include React 
var React = require('react');

// This is the saved component. It will be used to show a log of saved articles.
var Saved = React.createClass({

	// Here we render the function
	render: function(){
		return(

			<div className="panel panel-success">
				<div className="panel-heading">
					<h3 className="panel-title text-center"><strong>Saved Articles</strong></h3>
				</div>
				<div className="panel-body">

					{/* Here we use a map function to loop through an array in JSX*/}
					{console.log("this is props")}
					{console.log(this.props)}
					{this.props.savedArticles}
				</div>
			</div>

		)
	}
});



// Export the component back for use in other files
module.exports = Saved;