var Both = React.createClass({
	// constructor(props){
	// 	super(props)
	// },
	getInitialState(){
		return {
            num:0
		};

		//设置默认的一些属性
	},
	componentWillMount(){
        //console.log(this.state.num);
		//即将挂载组件到页面上
	},
	componentDidMount(){
		this.clickNum();
		this.setInterval();
		//已经将真实的DOM结构挂载到了页面上
		//对DOM进行操作、请求数据的方法写在此处
	},
	componentWillUnmount(){
		this.clickNum.bind(this);
        this.setInterval.bind(this);
		// console.log(this.clickNum.bind(this));
		//业务或者事件处理完毕，对已有的DOM或者
		// 方法进行解绑，销毁数据及DOM结构
	},
	clickNum:function(){
        //console.log(this.state.num);
        this.setState({
            num:10
        });
		//上面(setState({}))的方法是修改state里面数据的唯一方法，
		//不能直接修改state；
	},
	setInterval(){
        // setInterval(function () {
        // console.log('紫漠');
        // },300)
	},
	render(){
        console.log(this.state.num);
		//console.log(this);
		const title = '紫漠';
		var array = ['1','5','4'];
		var bothStyle = {
			width:'100%',
			height:'100%',
			backgroundColor:'#ccc',
			li:{
				borderBottom:'1px solid #000'
			}
		};
		return (
			<div style={bothStyle}>
				<Header />
				<ul>
					{
						array.map((ele,index)=>{
							return (
								<li style={bothStyle.li} onClick={this.clickNum} key={index}>{title}:{ ele }</li>
							)
						})
					}
				</ul>
				<Header />
				<Footers data="彩月" />
			</div>
		)
	}
});

class Footers extends React.Component{
	constructor(props){
		super(props);

		//ES6的react組件中，在构造函数中可以设置
		// state的默认值，更加的方便灵活
//下载Java JDK: http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html
//安装配置步骤：https://www.cnblogs.com/cnwutianhao/p/5487758.html
		//reducer必须返回一个新的对象才能触发组件的更新
        //因为在connect函数中会对新旧两个state进行浅对比，
		// 如果state只是值改变但是引用地址没有改变，
		// connect会认为它们相同而不触发更新。
		this.state = {
			flower:'玫瑰'
		};

        //console.log(this.props);
	};
	componentDidMount(){
        this.setState({
            flower:'带刺的玫瑰！！！'
        });
	};
	render(){
		const { data } = this.props;
		const massage = 'ES6語法';
		console.log(this.props);
		return (
			<div className="new_class">
				<span>{ massage }</span>
				<br/>
				<span>{ data }</span>
			</div>
		)
	}
}

var Header = React.createClass({
	render(){
		const msg = '我是紫漠！！！';
		return <div className="admin-header">{ msg }</div>
	}
});

ReactDOM.render(
	<Both />,
	document.getElementById('root')
);