import * as React from "react";

interface IPipeProps {
    y: string;
    bottom?: true;
    size: number;
    right?: true;
}

interface IIPipePropsState {
    scroll: number;
    y: number | null;
}

const ROTATION_SCALE = 30;
const PARALAX_AMOUNT = 0.2;

export class Pipe extends React.Component<IPipeProps, IIPipePropsState> {
    private ref = React.createRef<HTMLDivElement>();

    state: IIPipePropsState = {
        scroll: window.scrollY,
        y: null,
    };

    componentDidMount() {
        window.addEventListener("scroll", () => this.update());
        window.addEventListener("touchmove", () => this.update());
        this.update();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", () => this.update());
        window.removeEventListener("touchmove", () => this.update());
    }

    update() {
        this.setState({ scroll: window.scrollY });
    }

    transform() {
        if (this.ref && this.ref.current && this.state.y === null) {
            const bbox = this.ref.current.getBoundingClientRect();
            const y = bbox.y + bbox.height / 2;

            this.setState({ y });
        }

        let shift = 0;
        let rotation = this.props.right ? 180 : 0;

        if (this.state.y !== null) {
            const delta =
                (this.state.y - this.state.scroll) / window.innerHeight;

            rotation += delta * ROTATION_SCALE;

            shift += this.state.scroll * PARALAX_AMOUNT;
        }

        const translate = `translate(${this.props.right ? 35 : -35}%, -${
            this.props.bottom ? 75 : 25
        }%)`;
        const translate2 = `translate(0, ${shift}px)`;
        const rotate = `rotate(${rotation}deg)`;

        return `${translate} ${translate2} ${rotate}`;
    }

    render() {
        const props = this.props;

        return (
            <div
                ref={this.ref}
                className="pipe"
                style={{
                    top: props.y,
                    width: props.size + "vw",
                    height: props.size / 2 + "vw",
                    left: props.right ? undefined : 0,
                    right: props.right ? 0 : undefined,
                    transform: this.transform(),
                    backgroundImage: props.right
                        ? 'url("img/roura2.svg")'
                        : 'url("img/roura1.svg")',
                }}
            />
        );
    }
}
