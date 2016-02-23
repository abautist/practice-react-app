//React components go here

// var toDoItems = ['buy groceries', 'mow lawn', 'finish wdi', 'go to expedia'];

var MyApp = React.createClass({
	toDos: ['Mow the lawn', 'buy groceries', 'finish WDI'],
	render: function() {
		return (
			<div className="well">
				<h1>React To Do List</h1>
				<ToDoList items={['Mow the lawn', 'buy groceries', 'finish WDI']} />

			</div>
		);
	}
});

var ListItem = React.createClass({
	render: function(){
		return <li>{this.props.item}</li>;
	}
});

var ToDoList = React.createClass({
	getInitialState: function() {
		return {toDos: this.props.items || [],
			newItem: "",
			initialState: this.props.items ? this.props.items.slice(0) : []};
	},
	clear: function() {
		this.setState({toDos: []});
	},
	getInitialToDos: function() {
		this.setState({toDos: this.state.initialState});
	},
	newItemChange: function(e) {
		this.setState({newItem: e.target.value});
	},
	addItem: function(e) {
		e.preventDefault();
		var toDoCopy = this.state.toDos;
		toDoCopy.push(this.state.newItem);
		this.setState({toDos: toDoCopy, newItem: ""});
	},
	render: function(){
		var listItems = this.state.toDos.map(function(item, idx){
			return <ListItem key={idx} item={item} />;
		});
		return (
			<div>
				<button className="btn btn-primary" onClick={this.clear}>Clear</button>
				<button className="btn btn-success" onClick={this.getInitialToDos}>Reset</button>
				<form onSubmit={this.addItem}>
					<input type="text" value={this.state.newItem} onChange={this.newItemChange} />
				</form>
				<ul>
					{listItems}
				</ul>
			</div>
		);
	}
});

ReactDOM.render(<MyApp />, document.getElementById('reactApp'));

