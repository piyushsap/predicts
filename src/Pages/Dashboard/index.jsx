import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Spinner, Pageheader, Alert } from "../../Component";
import { fetchSchedule, fetchUsers, fetchPrediction } from '../../Store/actions/index';

class Dashboard extends Component {
  componentWillMount() {
    this.props.onFetchSchedule();
    this.props.onFetchUsers();
    this.props.onFetchPredictions();
  };
  state = {
    isloading: true
  }
  render() {
    const getPrediction = (matchId, userID, value) => {
      if (this.props.predictions != null) {
        let predictio = '',
          predict = this.props.predictions.filter(prediction => {
            return prediction.matchID === matchId && prediction.userID === userID
          });
        if (value === 'prediction')
          predictio = predict.length ? predict[0].prediction : null;
        else
          predictio = predict.length ? predict[0].bonus : null;

        return predictio
      }
    };
    return (
      <section className="dashboard">
        
        <Alert/>
        <Pageheader {...{ heading: "Dashboard" }} />
        <div className="table-overflow">
          {!this.props.loading && this.props.matches != null && this.props.users != null ? (
            <table className="slds-table slds-table_cell-buffer slds-table_bordered">
              <thead>
                <tr className="slds-line-height_reset">
                  <th className="" scope="col">
                    <div className="slds-truncate" title="Players">Players</div>
                  </th>
                  <th className="" scope="col">
                    <div className="slds-truncate" title="Points">Points</div>
                  </th>
                  {
                    this.props.matches.map((match, index) => {
                      return (
                        <Fragment key={match.id}>
                          <th className="" scope="col">
                            <div className="slds-truncate" title="Prediction">{match.team1a} vs {match.team2a}</div>
                          </th>
                          {match.bonusa !== '' ? (
                            <th className="" scope="col">
                              <div className="slds-truncate" title="Bonus">{match.bonusa}</div>
                            </th>
                          ) : null}
                        </Fragment>
                      )
                    })
                  }
                </tr>
              </thead>
              <tbody>
                {
                  this.props.users.map((user, index) => {
                    return <tr key={user.id} className="slds-hint-parent">
                      <th data-label={user.dname} scope="row">
                        <div className="slds-truncate" title={user.dname}>
                          {user.dname}
                        </div>
                      </th>
                      <td data-label="Points">
                        <div className="slds-truncate" title=""></div>
                      </td>
                      {
                        this.props.matches.map((match, index) => {
                          return <Fragment key={match.id}>
                            <td data-label="Prediction">
                              <div className="slds-truncate" title="User Prediction">{getPrediction(match.id,
                                user.userID, 'prediction')}</div>
                            </td>
                            {match.bonusa !== '' ? (
                              <td data-label="Prediction">
                                <div className="slds-truncate" title="Bonus Prediction">{getPrediction(match.id,
                                  user.userID, 'bonus')}</div>
                              </td>
                            ) : null}
                          </Fragment>
                        })
                      }
                    </tr>
                  })
                }
              </tbody>
            </table>
          ) : (
              <Spinner />
            )}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    matches: state.schedule,
    users: state.users,
    predictions: state.predictions,
    loading: state.loading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onFetchSchedule: () => dispatch(fetchSchedule()),
    onFetchUsers: () => dispatch(fetchUsers()),
    onFetchPredictions: () => dispatch(fetchPrediction())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);