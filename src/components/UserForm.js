import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const UserForm = () => {
    const [form] = Form.useForm();

    const submitForm = () => {
        console.log(form.getFieldsValue());
    }

    return (
        <Form form={form} onSubmitCapture={submitForm}>
            <FormItem 
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input name="username" placeholder='Kullanıcı Adı'/>
            </FormItem>
            <FormItem 
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input name="email" placeholder='Email'/>
            </FormItem>
            <FormItem>
                <Button  type="primary" htmlType="submit">
                    Kaydet
                </Button>
            </FormItem>
        </Form>
    )
}

export default UserForm;