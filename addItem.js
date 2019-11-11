import React from 'react';
class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: ["网页介绍", "网页特性", "开发者"],
            words: ["我是一个单页应用", "我是一个设计非常美观，实用性非常强的网页", "是一个特别帅的人写的网页", "嘤嘤嘤"],
            wordContent: "我是一个单页应用"
        };
    }
    render() {
        return (
            <div>
                <form>
                    <input id={"input"} type={"text"} value={this.state.inputValue}
                           onChange={(e)=>{
                               this.setState({
                                   inputValue: e.target.value
                               })
                           }}/>
                    <button onClick={()=>{
                        this.setState({
                            list: [...this.state.list, this.state.inputValue],
                            inputValue: ""
                        })
                    }}>添加功能</button>
                </form>
                <ul> {
                    this.state.list.map((item, index) => {
                        return (
                            <li key={index} onClick={() => {
                                this.setState({
                                        wordContent: this.state.words[index>3?3:index]
                                    }
                                );
                            }}><a href={"##"}>{item}</a></li>
                        )
                    })
                }
                </ul>
                <p>{this.state.wordContent}</p>
            </div>
        );
    }
}

export default AddItem