class MySider extends React.Component {
	handleClick = (e) => {
		let hash = '#/' + e.key.split(",").join("/");
		window.location.hash = hash;
	};
	render() {
		return(
			<Sider trigger={null} collapsible collapsed={this.props.collapsed} className="sider">
				<div className="logo" style={{background:this.props.siderBackColor,borderRight:this.props.sideBorder}}>
					<img style={{width:40}} src={this.props.logo}/>
					<span style={{fontSize:16,fontWeight:600,display:this.props.display,marginLeft:20,color:this.props.siderColor}}>
						<span style={{paddingTop:20}}>Ant-design</span>
					</span>
				</div>
				<Menu theme={this.props.theme} onClick={this.handleClick} className="menu" defaultSelectedKeys={this.props.defaultSelectedKeys} defaultOpenKeys={this.props.defaultOpenKeys} mode="inline">
					<SubMenu key="index" title={<span>
						<Icon type="ant-design" /><span>首页</span></span>}>
						<Menu.Item key="index,index">首页</Menu.Item>
					</SubMenu>
					<SubMenu key="order" title={<span>
						<Icon type="file" /><span>进件管理</span></span>}>
						<Menu.Item key="order,list">列表</Menu.Item>
						<Menu.Item key="order,form">新增进件</Menu.Item>
					</SubMenu>
					<SubMenu key="scheme" title={<span>
						<Icon type="profile" /><span>金融方案</span></span>}>
						<Menu.Item key="scheme,list">列表</Menu.Item>
						<Menu.Item key="scheme,form">新增金融方案</Menu.Item>
					</SubMenu>
					<SubMenu key="dealer" title={<span>
						<Icon type="appstore" /><span>车商报备</span></span>}>
						<Menu.Item key="dealer,list">列表</Menu.Item>
						<Menu.Item key="dealer,form">新增车商报备</Menu.Item>
					</SubMenu>
					<SubMenu key="capital" title={<span>
						<Icon type="pie-chart" /><span>资金方报备</span></span>}>
						<Menu.Item key="capital,list">列表</Menu.Item>
						<Menu.Item key="capital,form">新增资金方报备</Menu.Item>
					</SubMenu>
					<SubMenu key="download" title={<span>
						<Icon type="download" /><span>下载中心</span></span>}>
						<Menu.Item key="download,download">下载中心</Menu.Item>
					</SubMenu>
				</Menu>
				<div className="logo" style={{background:this.props.siderBackColor,borderRight:this.props.sideBorder}}>
					<img style={{width:40}} src={this.props.footer}/>
					<span style={{fontSize:16,fontWeight:600,display:this.props.display,marginLeft:10,color:this.props.siderColor}}>
						<span style={{paddingTop:20}}>myReact-router</span>
					</span>
				</div>
			</Sider>
			
		);
	}
}