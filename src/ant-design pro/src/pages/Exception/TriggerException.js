import React, { PureComponent } from 'react';
import { Button, Spin, Card } from 'antd';
import { connect } from 'dva';
import styles from './style.less';

@connect(state => ({
  isloading: state.error.isloading,
}))
class TriggerException extends PureComponent {
  state = {
    isloading: false,
  };

  triggerError = code => {
    this.setState({
      isloading: true,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'error/query',
      payload: {
        code,
      },
    });
  };

  render() {
    const { isloading } = this.state;
    return (
      <Card>
        <Spin spinning={isloading} wrapperClassName={styles.trigger}>
          <Button type="danger" onClick={() => this.triggerError(401)}>
            trigger 401
          </Button>
          <Button type="danger" onClick={() => this.triggerError(403)}>
             trigger 403
          </Button>
          <Button type="danger" onClick={() => this.triggerError(500)}>
             trigger 500
          </Button>
          <Button type="danger" onClick={() => this.triggerError(404)}>
             trigger 404
          </Button>
        </Spin>
      </Card>
    );
  }
}

export default TriggerException;
