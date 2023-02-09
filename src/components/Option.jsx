export default function Option(props){
	return(
		<div>
			<button className="option" dangerouslySetInnerHTML={{ __html: props.value }}>
			</button>
		</div>
	)
}