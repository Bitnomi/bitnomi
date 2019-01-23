import React, { Component, Fragment } from 'react';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import { connect } from 'dva';
import {
  Button,
  Menu,
  Dropdown,
  Icon,
  Row,
  Col,
  Steps,
  Card,
  Popover,
  Badge,
  Table,
  Tooltip,
  Divider,
} from 'antd';
import classNames from 'classnames';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './AdvancedProfile.less';

const { Step } = Steps;
const { Description } = DescriptionList;
const ButtonGroup = Button.Group;

const getWindowWidth = () => window.innerWidth || document.documentElement.clientWidth;

const menu = (
  <Menu>
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
    <Menu.Item key="3">Option 3</Menu.Item>
  </Menu>
);

const action = (
  <Fragment>
    <ButtonGroup>
      <Button>operating</Button>
      <Button>operating</Button>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>
          <Icon type="ellipsis" />
        </Button>
      </Dropdown>
    </ButtonGroup>
    <Button type="primary">Main operation</Button>
  </Fragment>
);

const extra = (
  <Row>
    <Col xs={24} sm={12}>
      <div className={styles.textSecondary}>status</div>
      <div className={styles.heading}>Pending</div>
    </Col>
    <Col xs={24} sm={12}>
      <div className={styles.textSecondary}>order amount</div>
      <div className={styles.heading}>¥ 568.08</div>
    </Col>
  </Row>
);

const description = (
  <DescriptionList className={styles.headerList} size="small" col="2">
    <Description term="founder">Qu Lili</Description>
    <Description term="Ordering Products">XX service</Description>
    <Description term="Creation time">2017-07-07</Description>
    <Description term="Associated document"><a href="">12421</a></Description>
    <Description term="effective date">2017-07-07 ~ 2017-08-08</Description>
    <Description term="Remarks">Please confirm within two working days</Description>
  </DescriptionList>
);

const tabList = [
  {
    key: 'detail',
    tab: 'Details',
  },
  {
    key: 'rule',
    tab: 'rule',
  },
];

const desc1 = (
  <div className={classNames(styles.textSecondary, styles.stepDescription)}>
    <Fragment>
      Qu Lili
      <Icon type="dingding-o" style={{ marginLeft: 8 }} />
    </Fragment>
    <div>2016-12-12 12:32</div>
  </div>
);

const desc2 = (
  <div className={styles.stepDescription}>
    <Fragment>
     Zhou Maomao
      <Icon type="dingding-o" style={{ color: '#00A0E9', marginLeft: 8 }} />
    </Fragment>
    <div>
      <a href="">Urge</a>
    </div>
  </div>
);

const popoverContent = (
  <div style={{ width: 160 }}>
   Wu Jia
    <span className={styles.textSecondary} style={{ float: 'right' }}>
      <Badge status="default" text={<span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>No response</span>} />
    </span>
    <div className={styles.textSecondary} style={{ marginTop: 4 }}>
      
Time-consuming: 2 hours and 25 minutes
    </div>
  </div>
);

const customDot = (dot, { status }) =>
  status === 'process' ? (
    <Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
      {dot}
    </Popover>
  ) : (
    dot
  );

const operationTabList = [
  {
    key: 'tab1',
    tab: 'tab 1',
  },
  {
    key: 'tab2',
    tab: 'tab 2',
  },
  {
    key: 'tab3',
    tab: 'tab 3',
  },
];

const columns = [
  {
    title: 'Operation type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Operator',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Results of the',
    dataIndex: 'status',
    key: 'status',
    render: text =>
      text === 'agree' ? (
        <Badge status="success" text="success" />
      ) : (
        <Badge status="error" text="turn down" />
      ),
  },
  {
    title: 'Operating time',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
  {
    title: 'Remarks',
    dataIndex: 'memo',
    key: 'memo',
  },
];

@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects['profile/fetchAdvanced'],
}))
class AdvancedProfile extends Component {
  state = {
    operationkey: 'tab1',
    stepDirection: 'horizontal',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profile/fetchAdvanced',
    });

    this.setStepDirection();
    window.addEventListener('resize', this.setStepDirection, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setStepDirection);
    this.setStepDirection.cancel();
  }

  onOperationTabChange = key => {
    this.setState({ operationkey: key });
  };

  @Bind()
  @Debounce(200)
  setStepDirection() {
    const { stepDirection } = this.state;
    const w = getWindowWidth();
    if (stepDirection !== 'vertical' && w <= 576) {
      this.setState({
        stepDirection: 'vertical',
      });
    } else if (stepDirection !== 'horizontal' && w > 576) {
      this.setState({
        stepDirection: 'horizontal',
      });
    }
  }

  render() {
    const { stepDirection, operationkey } = this.state;
    const { profile, loading } = this.props;
    const { advancedOperation1, advancedOperation2, advancedOperation3 } = profile;
    const contentList = {
      tab1: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation1}
          columns={columns}
        />
      ),
      tab2: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation2}
          columns={columns}
        />
      ),
      tab3: (
        <Table
          pagination={false}
          loading={loading}
          dataSource={advancedOperation3}
          columns={columns}
        />
      ),
    };

    return (
      <PageHeaderWrapper
        title="Single number"
        logo={
          <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" />
        }
        action={action}
        content={description}
        extraContent={extra}
        tabList={tabList}
      >
        <Card title="Process progress" style={{ marginBottom: 24 }} bordered={false}>
          <Steps direction={stepDirection} progressDot={customDot} current={1}>
            <Step title="Create project" description={desc1} />
            <Step title="Departmental preliminary review" description={desc2} />
            <Step title="Financial review" />
            <Step title="carry out" />
          </Steps>
        </Card>
        <Card title="User Info" style={{ marginBottom: 24 }} bordered={false}>
          <DescriptionList style={{ marginBottom: 24 }}>
            <Description term="username">Fu Xiaoxiao</Description>
             <Description term="phone">0123456789</Description>
            <Description term="e-mail">hi@yahoo.com</Description>
            <Description term="member card number">32943898021309809423</Description>
            <Description term="ID card">3321944288191034921</Description>
            <Description term="Contact information">18112345678</Description>
            <Description term="contact address">
              Qu Lili 18100000000 Intersection of Gongzhu Road, Huanggushan Road, Xihu District, Hangzhou, Zhejiang, China
            </Description>
          </DescriptionList>
          <DescriptionList style={{ marginBottom: 24 }} title="Information group">
            <Description term="Certain data">725</Description>
            <Description term="The data update time">2017-08-08</Description>
            <Description>&nbsp;</Description>
            <Description
              term={
                <span>
                  Certain data
                  <Tooltip title="the data shows">
                    <Icon
                      style={{ color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4 }}
                      type="info-circle-o"
                    />
                  </Tooltip>
                </span>
              }
            >
              725
            </Description>
            <Description term="The data update time">2017-08-08</Description>
          </DescriptionList>
          <h4 style={{ marginBottom: 16 }}>Information group</h4>
          <Card type="inner" title="Multi-level information group">
            <DescriptionList size="small" style={{ marginBottom: 16 }} title="Group name">
              <Description term="principal">Lin Dongdong</Description>
              <Description term="Role code">1234567</Description>
              <Description term="Department">XX company - YY department</Description>
              <Description term="expire date">2017-08-08</Description>
              <Description term="description">
              This description is very long, long, long, long, long, long, long, long, long, long, long, long, long, long, long...
              </Description>
            </DescriptionList>
            <Divider style={{ margin: '16px 0' }} />
            <DescriptionList size="small" style={{ marginBottom: 16 }} title="Group name" col="1">
              <Description term="scientific name">
                Citrullus lanatus (Thunb.) Matsum. et
                Nakai一Annual vines; stems and branches are thick and sturdy. The tendril is thicker..
              </Description>
            </DescriptionList>
            <Divider style={{ margin: '16px 0' }} />
            <DescriptionList size="small" title="Group name">
              <Description term="principal">Fu Xiaoxiao</Description>
              <Description term="Role code">1234568</Description>
            </DescriptionList>
          </Card>
        </Card>
        <Card title="User's call record in the past six months" style={{ marginBottom: 24 }} bordered={false}>
          <div className={styles.noData}>
            <Icon type="frown-o" />
            No data
          </div>
        </Card>
        <Card
          className={styles.tabsCard}
          bordered={false}
          tabList={operationTabList}
          onTabChange={this.onOperationTabChange}
        >
          {contentList[operationkey]}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default AdvancedProfile;
