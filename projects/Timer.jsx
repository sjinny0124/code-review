import React from 'react';
import './Timer.css';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mtNow: moment(),
    };
  }

  checkExpired = () => {
    console.log(this);
    const {mtNow} = this.state;
    const {expireDate} = this.props;
    const mtExpire = moment(expireDate);

    return mtExpire < mtNow;
  };

  componentDidMount() {
    if (!this.checkExpired()) {
      this.nTimer = setInterval(() => {
        this.setState({
          mtNow: moment(),
        });
      }, 1000);
    }
  }

  componentDidUpdate() {
    if (this.checkExpired()) {
      clearInterval(this.nTimer);
    }
  }

  render() {
    const {mtNow} = this.state;
    const {expireDate} = this.props;
    const mtExpire = moment(expireDate);

    const isExpired = mtExpire < mtNow;
    return (
      <div className="Timer">
        <div>현재시간은 {mtNow.format('A h:mm:ss')}</div>

        {isExpired ? (
          <div>종료되었습니다.</div>
        ) : (
          <div>{mtExpire.fromNow()}에 강의를 종료합니다.</div>
        )}
      </div>
    );
  }
}

export default Timer;
