import React, {Component} from 'react';
import ReactList from 'react-list';
import FindProjectItem from './FindProjectItem';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = { projectItems: [] };
    }

    componentWillReceiveProps(nextProps) {
        this.createProjectItems(nextProps.features);
    }

    createProjectItems(projects) {
        let projectItems = projects.map((feature, index) => {
            return (
                <FindProjectItem
                    key={index}
                    image={feature.topDonateImg}
                    imageDescription={feature.topImgAlt}
                    icon={feature.icon}
                    iconDescription={feature.iconAlt}
                    heading={feature.project}
                    content={feature.content}
                    amount={feature.amount}
                    totalAmount={feature.totalAmount}
                    progress={feature.progress}
                    donaters={feature.donaters}
                    projectTime={feature.projectTime}
                    donate={feature.donate}
                    read={feature.read}
                />
            );
        })

        this.setState({ projectItems: projectItems });
    }

    renderItem(index, key) {
        return (
            <div key={key}>
                {this.state.projectItems[index]}
            </div>
        );
    }

    render() {
        return (
            <div className="projects">
                <h1>Accounts</h1>
                <div style={{overflow: 'auto', maxHeight: 800}}>
                    <ReactList
                        itemRenderer={this.renderItem.bind(this)}
                        length={this.state.projectItems.length}
                        type='uniform'
                    />
                </div>
            </div>
        );
    }
}

export default Projects;
