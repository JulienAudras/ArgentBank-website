import { useState, useEffect, useRef } from "react"

const Transaction = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const contentHeight = contentRef.current.scrollHeight;
        contentRef.current.style.height = isOpen ? `${contentHeight}px` : "0px";
    }, [isOpen]);

  return (
    <div className="transactionContainer">
        <div className = "transactionContainer__transactionGeneral">
            <span className="transactionContainer__transactionGeneral--date">{props.date}</span>
            <span className="transactionContainer__transactionGeneral--description">{props.description}</span> 
            <div />
            <span className="transactionContainer__transactionGeneral--amount">{props.amount}</span>
            <span className="transactionContainer__transactionGeneral--balance">{props.balance}</span>
            <img 
            src="/images/arrow_down.png"
            alt="Flèche"
            className={`transactionContainer__transactionGeneral--arrow ${isOpen ? "open" : "closed"}`}
            onClick={toggleCollapse}
            />     
        </div>
        <div className="transactionContainer__transactionDetails" 
        ref={contentRef}
        style={{
        height: isOpen ? contentRef.current.scrollHeight + "px" : "0px",
        transition: "height 0.5s ease"
        }}>
            <div className="transactionContainer__transactionDetails--type">
                <span className="transactionContainer__transactionDetails--type--title">Type</span>
                <span className="transactionContainer__transactionDetails--type--text">{props.transactionType}</span> 
            </div>
            <div className="transactionContainer__transactionDetails--category">
                <span className="transactionContainer__transactionDetails--category--title">Category</span>
                <div className="transactionContainer__transactionDetails--category--content">
                    <span className="transactionContainer__transactionDetails--category-content--text">{props.category}</span>
                    <i className="transactionContainer__transactionDetails--category--content--icon fa-sharp fa-solid fa-pen"></i>
                </div>
            </div>
            <div className="transactionContainer__transactionDetails--notes">
                <span className="transactionContainer__transactionDetails--notes--title">Notes</span>
                <div className="transactionContainer__transactionDetails--notes--content">
                    <span className="transactionContainer__transactionDetails--notes--content--text">{props.notes}</span>
                    <i className="transactionContainer__transactionDetails--notes--content--icon fa-sharp fa-solid fa-pen"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Transaction