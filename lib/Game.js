import Row from "./Row.js";
import Cell from "./Cell.js";
import Footer from "./Footer.js";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gameState: 'ready'};
    }
    componentDidMount() {
        setTimeout(() => {
              this.setState({ gameState: 'memorize' }, () => {
                  setTimeout(() => this.setState({ gameState: 'recall' }), 2000);
             });
        }, 2000);
    }
    render () {
        let matrix = [],
            row;

        for (let r = 0; r < this.props.rows; r++) {
            row = [];
            for (let c = 0; c < this.props.columns; c++) {
                row.push(`${r}${c}`);
            }
            matrix.push(row);
        }

        return (
            <div>
                <div className="grid">
                    {matrix.map((row, ri) => (
                        <Row key={ri}>
                            {row.map(cellId => <Cell key={cellId} id={cellId}/>)}
                        </Row>
                    ))}
                </div>
                <Footer {...this.state} />
            </div>
        );
    }
}

export default Game;
