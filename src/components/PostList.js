import React from "react";
import UserHeader from "./UserHeader";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";

class PostList extends React.Component {
	state = {};
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderList() {
		return this.props.posts.map((post) => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
							<h3>
								Author: <UserHeader userId={post.userId} />
							</h3>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui relaxed divided list">{this.renderList()} </div>;
	}
}
const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	};
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
