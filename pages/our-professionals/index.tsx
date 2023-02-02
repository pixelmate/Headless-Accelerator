import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../../components/PageStructure/Container/Layout'
import { ourProfessionalRouter } from '../../lib/provider/mapper'
import Container from '../../components/PageStructure/Container/Container'
import Title from '../../components/Elements/Title'
import Teams from '../../components/Composits/Teams/Teams'
import AccordionComponent from '../../components/PageContent/Accordion/Accordion'
import Section from '../../components/PageStructure/Container/Section'

const OurProfessionals = ({ pageTemplate, pageResponse, provider, meta }: any) => {

  const [teamMembers, setTeamMembers] = useState(pageResponse.ourTeams),
    [page, setPage] = useState(1),
    pages = pageResponse?.metadata?.total_pages ? pageResponse.metadata.total_pages : "",
    pagesArray = [...Array(pages)]
  useEffect(() => {
    (
      async () => {
        const membersdata = await fetch(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/our-professionals?page=` + page,
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "Application/json"
            }
          })
        const teamMembers = await membersdata.json()
        setTeamMembers(teamMembers?.members)
      }
    )()

  }, [page])

  return (
    <Layout header={pageTemplate} provider={provider}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>
      <>
        <Section style={{ backgroundImage: `url(${pageResponse?.backgroundImage ? pageResponse.backgroundImage : ""})` }} className="our-professional">
          <Container>
            <Title className={'pt-4'} type={'h2'}>{pageResponse?.title ? pageResponse.title : "Our Professional"}</Title>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className='bg-grey-primary'>
                  <AccordionComponent content={pageResponse?.accordion?.cardsCollection?.items} provider={provider} flush={'flush'} />
                </div>
              </div>
              <div className="col-md-8">
                {
                  teamMembers
                    ? <Teams content={teamMembers} provider={provider} />
                    : <p className='lead'> Loading Team members... Please wait.  </p>
                }
                {pageResponse?.metadata?.total_pages ?
                  <>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className={"page-item"}>
                          <a className="page-link" href="" aria-disabled={pageResponse?.metadata?.current_page == 1 ? true : false} data-page={page} onClick={() => setPage(page - 1)}>Previous</a>
                        </li>
                        {pagesArray ? pagesArray.map((page: any, index: any) => (
                          <li key={index} className="page-item"><a className="page-link" href={"#page=" + (index + 1)} data-page={page} onClick={() => setPage(index + 1)}>{index + 1}</a></li>
                        )) : ""}
                        <li className="page-item">
                          <a className="page-link" href="" data-page={page} onClick={() => setPage(page + 1)}>Next</a>
                        </li>
                      </ul>
                    </nav>
                  </> : ""


                }
                <div className='row'>
                  <div className='col-12 text-center pt-5 pb-5'>

                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </>
    </Layout>
  )
}


export default OurProfessionals;

export async function getServerSideProps() {
  const pageResponse = (await ourProfessionalRouter(1)) ?? [];
  const meta = {
    currentPage: pageResponse?.data?.ourTeams?.metadata?.current_page ? pageResponse.data.ourTeams.metadata.current_page : 1,
    totalPage: pageResponse?.data?.ourTeams?.metadata?.total_pages ? pageResponse.data.ourTeams.metadata.total_pages : 1,
    totalResult: pageResponse?.data?.ourTeams?.metadata?.total_results ? pageResponse.data.ourTeams.metadata.total_results : 1
  }
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      provider: pageResponse.provider
    }
  }
}
