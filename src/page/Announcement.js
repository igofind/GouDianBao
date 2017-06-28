import React, { PureComponent } from 'react';
import { InteractionManager, WebView } from 'react-native';
import theme from '../style/theme';
import ArrowLeft from '../widget/ArrowLeft';
import EmptyIcon from '../widget/EmptyIcon';

const tradeDetailText = `
    <h2 style="white-space: normal; margin-right: 0px; margin-left: 0px; text-align: center; text-indent: 0em;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第一章&nbsp;总&nbsp;则</span>
</h2>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第一条 为规范广东电力市场交易，构建安全、高效的市场结构和市场体系，保障市场成员合法权益，促进电力市场健康发展，根据国家发展改革委、国家能源局《电力中长期交易基本规则（暂行）》和《中共广东省委 广东省人民政府关于进一步深化电力体制改革的实施意见》（粤发〔2015〕14 号）及相关配套改革方案，制定本规则。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第二条 广东电力市场遵循安全高效、公平公正、因地制宜、实事求是的原则和务实起步、先易后难、循序渐进、逐步完善的指导思想。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第三条 电力市场交易分为电力批发交易和电力零售交易。电力批发交易是指发电企业与售电公司或电力大用户之间通过市场化方式进行的电力交易活动的总称。现阶段，是指发电企业、售电公司、电力大用户等市场主体通过双边协商、集中竞争等方式开展的中长期电量交易。电力零售交易是指售电公司与中小型终端电力用户（下称“一般用户”）开展的电力交易活动的总称。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第四条 电力市场成员应严格遵守市场规则，自觉自律，不得利用市场力或市场规则的缺陷，操纵市场价格、损害其他市场主体的利益。任何单位和个人不得非法干预市场正常运行。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第五条 本规则适用于《广东电力市场建设实施方案》中含交叉补贴的输配电价正式实施前的电力市场交易，并根据电力体制改革进程进行修订。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第六条 国家能源局南方监管局、广东省经济和信息化委员会、广东省发展和改革委员会根据职能依法履行广东电力市场监管职责，对市场主体有关市场操纵力、公平竞争、电网公平开放、交易行为等情况实施监管，对电力交易机构和电力调度机构执行市场规则的情况实施监管。</span>
</p>
<h2 style="white-space: normal; margin-right: 0px; margin-left: 0px; text-align: center; text-indent: 0em;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第二章&nbsp;市场成员</span>
</h2>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第七条 市场成员包括各类发电企业、售电公司、电网企业、电力用户、电力交易机构、电力调度机构和独立辅助服务提供者等。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第八条 发电企业的权利和义务：</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（一） 按规则参与电力市场交易，执行基数电量合同，签订和履行市场化交易形成的购售电合同。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（二）获得公平的输电服务和电网接入服务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（三）执行并网调度协议，服从电力调度机构的统一调度，按规定提供辅助服务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（四）按规定披露和提供信息，获得市场交易和输配电服务等相关信息。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（五）法律法规规定的其他权利和义务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第九条 电力用户的权利和义务：</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（一）按规则参与电力市场交易，签订和履行购售电合同、输配电服务合同等。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（二）获得公平的输配电服务和电网接入服务，按规定支付购电费、输配电费、缴纳政府性基金与附加、承担交叉补贴等。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（三）按规定披露和提供信息，获得市场交易和输配电服务等相关信息。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（四）服从电力调度机构的统一调度，在系统特殊运行状况下（如事故、严重供不应求等）按调度要求安排用电。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（五）遵守政府电力管理部门有关电力需求侧管理规定，执行有序用电管理，配合开展错避峰。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（六）法律法规规定的其他权利和义务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第十条 不拥有配电网运营权的售电公司的权利和义务：</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（一）按规则参与电力市场交易，签订和履行购售电合同、输配电合同等，约定交易、服务、结算、收费等事项。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（二）获得公平的输配电服务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（三）已在电力交易机构注册的售电公司不受供电营业区限制，可在省内多个供电营业区售电。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（四）按规定披露和提供信息，获得市场交易和输配电服务等相关信息。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（五）应承担保密义务，不得泄露用户信息。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（六）按照国家有关规定，在指定网站上公示公司资产、经营状况等情况和信用承诺，对公司重大事项进行公告，并定期公布公司年报。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（七）服从电力调度机构的统一调度，在系统特殊运行状况下（如事故、严重供不应求等）按调度要求协助安排用电。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（八）法律法规规定的其他权利和义务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第十一条 拥有配电网运营权的售电公司的权利和义务：</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（一）具备不拥有配电网运营权的售电公司全部的权利和义务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（二）拥有和承担配电区域内与电网企业相同的权利和义务，按国家有关规定和合同约定履行保底供电服务和普遍服务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（三）承担配电网安全责任，按照国家、电力行业和广东省标准提供安全、可靠的电力供应，确保承诺的供电质量符合国家、电力行业和广东省标准。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（四）按照国家、电力行业和广东省标准，负责配电网络的投资、建设、运营和维护、检修和事故处理，无歧视提供配电服务，不得干预用户自主选择售电公司。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（五）同一配电区域内只能有一家公司拥有该配电网运营权。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（六）法律法规规定的其他权利和义务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第十二条 电网企业的权利和义务：</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（一）保障输配电设施的安全稳定运行。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（二）为市场主体提供公平的输配电服务和电网接入服务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（三）服从电力调度机构的统一调度，建设、运行、维护和管理电网配套技术支持系统。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（四）向市场主体提供报装、计量、抄表、收催缴电费、维修等各类供电服务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（五）按规定收取输配电费用，归集交叉补贴，代国家收取政府性基金与附加等。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（六）预测不参与市场交易的用户电量需求，执行厂网间基数电量等合同。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（七）按政府定价向不参与市场交易的用户提供售电服务，签订和履行相应的供用电合同。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（八）按规定披露和提供信息。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（九）法律法规规定的其他权利和义务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第十三条 电力交易机构的权利和义务：</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（一）组织和管理各类交易。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（二）拟定相应电力交易实施细则。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（三）编制交易计划。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（四）负责市场主体注册管理。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（五）提供电力交易结算依据（包括但不限于全部电量电费、辅助服务费及输电服务费）及相关服务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（六）监视和分析市场运行情况。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（七）建设、运营和维护电力市场交易技术支持系统。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（八）配合对市场运营规则进行分析评估，提出修改建议。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（九）配合开展市场主体信用评价，维护市场秩序。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（十）按规定披露和发布信息。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（十一）法律法规规定的其他权利和义务。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第十四条 电力调度机构的权利和义务：</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（一）按调度管理权限负责安全校核。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（二）根据调度规程实施电力调度，负责系统实时平衡，确保电网安全。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（三）向电力交易机构提供安全约束条件和基础数据，配合电力交易机构履行市场运营职能。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（四）合理安排电网运行方式，保障发电调度计划的执行。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（五）按规定披露和提供电网运行的相关信息。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（六）法律法规规定的其他权利和义务。</span>
</p>
<h2 style="white-space: normal; margin-right: 0px; margin-left: 0px; text-align: center; text-indent: 0em;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第三章&nbsp;市场准入管理</span>
</h2>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第一节 准入和退出条件</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第十五条 参加市场交易的发电企业、售电公司、电力用户，应当是具有独立法人资格、独立财务核算、信用良好、能够独立承担民事责任的经济实体。内部核算的发电企业（电网企业保留的调峰调频电厂除外）、电力用户经法人单位授权，可参与相应市场交易。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第十六条 市场主体资格采取注册制度。参与电力市场的发电企业、售电公司、电力用户应符合国家、广东省有关准入条件，进入广东省公布的目录，并按程序完成注册后方可参与电力市场交易。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">第十七条 广东省内发电企业市场准入：</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（一）与电力用户、售电公司直接交易的发电企业，应符合国家、广东省有关准入条件，并在电力交易机构注册。仅开展基数电量合同转让交易的发电企业，可直接在电力交易机构注册。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; letter-spacing: 0px; font-size: 14px;">（二）并网自备电厂参与市场化交易，须公平承担发电企业社会责任、承担国家依法合规设立的政府性基金以及与产业政策相符合的政策性交叉补贴、支付系统备用费。</span>
</p>
<p style="white-space: normal; text-indent: 37px;">
    <span style="font-family: 仿宋; font-size: 14px;">...</span>
</p>
<p style="white-space: normal;">
    <br/>
</p>
<p>
    <br/>
</p>
`;

export default class extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: theme.styles.commonHeaderStyle,
        headerTitle: '公告详情',
        headerTitleStyle: theme.styles.commonHeaderTitleStyle,
        headerLeft: <ArrowLeft onPress={() => { navigation.goBack(null); }} />,
        headerRight: <EmptyIcon />,
    });

    constructor() {
        super();
        this.state = {
            html: '',
        };
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => this.fetchData());
    }
    fetchData() {
        this.setState({
            html: tradeDetailText,
        });
    }
    render() {
        return (
            <WebView source={{ html: this.state.html }} />
        );
    }
}
