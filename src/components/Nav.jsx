import { Link } from "react-router";

const Nav = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
                <li>
                    <Link to={`/todo`}>TodoList</Link>
                </li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/notes">Notes</Link>
				</li>
				<li>
					<Link to="/team">Team</Link>
				</li>
				<li>
					<Link to="/postlist">PostList</Link>
				</li>
				<li>
					<Link to="/userlist">UserList</Link>
				</li>
                <li>
                    <Link to={`/mypage`}>MyPage</Link>
                </li>
				
			</ul>
		</div>
    )
}
export default Nav;