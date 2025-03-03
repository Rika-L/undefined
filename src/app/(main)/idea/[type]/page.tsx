function Page({ params }: { params: { type: string } }) {
  return (<div>{params.type}</div>)
}

export default Page
