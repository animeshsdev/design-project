
interface FooterListProps {
    list: string[];
    name: string;
}
const FooterList = ({ list, name }: FooterListProps) => {
    return <div className='footerlist'>
        <h3>{name}</h3>
        <ul>
            {list
                .map(
                    (item: string, idx: number) =>
                        <li key={`${item}_${idx}`}>
                            <a href="#">{item}</a>
                        </li>)}
        </ul>
    </div>
}

export default FooterList;