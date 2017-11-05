import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-spinner';
import Select from 'react-select';
import { getProject } from '../../actions/ProjectActions';
import { donateToProject, clearDonationState } from '../../actions/DonateActions';
import { fetchData } from '../../actions/FetchDataActions';
import * as images from '../../../img/images';

const DEFAULT_CURRENCY = 'Bitcoin';

class Donation extends Component {
    constructor(props) {
        super(props);

        this.state = { amount: '', message: '', currency: DEFAULT_CURRENCY };
    }

    componentWillMount() {
        this.props.clearDonationState();
        this.props.getProject(this.props.params.pathParam);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ message: nextProps.donation });
    }

    onInputChange(event) {
        this.setState({ amount: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        let amount = this.state.amount;
        let currency = this.state.currency.value ? this.state.currency.value : this.state.currency;
        if (!amount) {
            this.setState({ message: 'Donation amount is missing!' });
        }
        else if (isNaN(amount)) {
            this.setState({ message: 'Only numbers are allowed!' });
        } else {
            this.props.fetchData();
            this.props.donateToProject(amount, currency, this.props.project.projectId, this.props.project.project);
            this.setState({ amount: '' });
        }
    }

    onChange(value) {
        this.setState({ currency: value });
    }

    renderDonationMessage(message) {
        if (message.length > 0) {
            if (message.substr(0, 5) === "Thank") {
                return <p>{message}</p>;
            } else {
                return <p style={{color: 'red'}}>{message}</p>;
            }
        } else {
            return <p>{message}</p>;
        }
    }

    render() {
        var options = [
            { value: DEFAULT_CURRENCY, label: DEFAULT_CURRENCY },
            { value: 'USD', label: 'USD' },
            { value: 'GBP', label: 'GBP' },
            { value: 'SEK', label: 'SEK' }
        ];

        let project = this.props.project;

        return (
            <section className="donation" style={{ backgroundImage: "url(" + images[project.backgroundImage] + ")" }} >
                <div className="row donation-wrapper">
                    <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                        <div className="text-header text-center">
                            <img className="icon" src={images[project.icon]} alt={project.iconAlt} />
                            {project.title}
                        </div>
                        <div className="select-wrapper">
                            <Select
                                name="form-field-name"
                                searchable={false}
                                clearable={false}
                                options={options}
                                onChange={this.onChange.bind(this)}
                                value={this.state.currency}
                            />
                        </div>
                        <form className="text-center" onSubmit={this.onFormSubmit.bind(this)}>
                            <input
                                placeholder="Your Donation"
                                value={this.state.amount}
                                onChange={this.onInputChange.bind(this)}
                            />
                            <div className="message text-center">
                                { this.props.isFetching && <Spinner /> }
                                {this.renderDonationMessage(this.state.message)}
                            </div>
                            <div className="button text-center">
                                <button type="submit" className="btn btn-default btn-block button-green">Donate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps({ project, donation, isFetching }) {
    return { project, donation, isFetching };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProject, clearDonationState, donateToProject, fetchData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Donation);
