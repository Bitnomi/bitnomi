import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Select, Divider } from 'antd';
import router from 'umi/router';
import styles from './style.less';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

@connect(({ form }) => ({
  data: form.step,
}))
@Form.create()
class Step1 extends React.PureComponent {
  render() {
    const { form, dispatch, data } = this.props;
    const { getFieldDecorator, validateFields } = form;
    const onValidateForm = () => {
      validateFields((err, values) => {
        if (!err) {
          dispatch({
            type: 'form/saveStepFormData',
            payload: values,
          });
          router.push('/form/step-form/confirm');
        }
      });
    };
    return (
      <Fragment>
        <Form layout="horizontal" className={styles.stepForm} hideRequiredMark>
          <Form.Item {...formItemLayout} label="payment account">
            {getFieldDecorator('payAccount', {
              initialValue: data.payAccount,
              rules: [{ required: true, message: 'Please select a payment account' }],
            })(
              <Select placeholder="test@example.com">
                <Option value="ant-design@alipay.com">ant-design@alipay.com</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Accounts receivable">
            <Input.Group compact>
              <Select defaultValue="alipay" style={{ width: 100 }}>
                <Option value="alipay">Alipay</Option>
                <Option value="bank">Bank Account</Option>
              </Select>
              {getFieldDecorator('receiverAccount', {
                initialValue: data.receiverAccount,
                rules: [
                  { required: true, message: 'Please enter the payee account' },
                  { type: 'email', message: 'Account name should be in the mailbox format' },
                ],
              })(<Input style={{ width: 'calc(100% - 100px)' }} placeholder="test@example.com" />)}
            </Input.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label="Payee Name">
            {getFieldDecorator('receiverName', {
              initialValue: data.receiverName,
              rules: [{ required: true, message: 'Please enter the payee name' }],
            })(<Input placeholder="Please enter the payee name" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="transfer amount">
            {getFieldDecorator('amount', {
              initialValue: data.amount,
              rules: [
                { required: true, message: 'Please enter the transfer amount' },
                {
                  pattern: /^(\d+)((?:\.\d+)?)$/,
                  message: 'Please enter a legal amount number',
                },
              ],
            })(<Input prefix="￥" placeholder="Please enter the amount" />)}
          </Form.Item>
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: {
                span: formItemLayout.wrapperCol.span,
                offset: formItemLayout.labelCol.span,
              },
            }}
            label=""
          >
            <Button type="primary" onClick={onValidateForm}>
            Next step
            </Button>
          </Form.Item>
        </Form>
        <Divider style={{ margin: '40px 0 24px' }} />
        <div className={styles.desc}>
          <h3>Description</h3>
          <h4>Transfer to Alipay account</h4>
          <p>
           If you need to, here are some common problem descriptions about the product. If you need to, here are some common problem descriptions about the product. If you need to, here are some common problem descriptions about the product.
          </p>
          <h4>Transfer to bank card</h4>
          <p>
           If you need to, here are some common problem descriptions about the product. If you need to, here are some common problem descriptions about the product. If you need to, here are some common problem descriptions about the product.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Step1;
