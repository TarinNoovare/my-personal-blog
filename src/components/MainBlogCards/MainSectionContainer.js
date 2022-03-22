import "./MainSectionContainer.css"

function MainSectionContainer (props) {
    return (<main className="main-box-container">
        {props.children}
    </main>);
}

export default MainSectionContainer;