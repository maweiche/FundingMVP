import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import ImgSkeleton from '../skeletons/ImgSkeleton'
import Tag from "../../components/typography/Tag"
import donation from '../../abi/donation.json'
import { useContractRead } from 'wagmi'
import { BlockchainIcon, StreamIcon } from '../icons/Landing'
import {GetFundingAddress} from '../functional/GetContractAddress'
import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const A = styled(Link)`
    &:hover{
        text-decoration: none;  
    }
`

const Container = styled(motion.div)`
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    max-height: 450px;
    width: 32%;
    max-width: 500px;
    padding: 2%;
    margin-top: 3%;
    border: 1px solid rgba(163, 163, 163, 0.3);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
    border-radius: 5px;
    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 5%;
        margin-top: 7%;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Amount = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    color: #00FFA3;
`

const Title = styled.div`
    font-family: "Gemunu Libre";
    font-style: normal;
    font-weight: 700;
    font-size: 1.5em;
    color: #b0f6ff;
    margin-top: 5%;
`

const Desc = styled.div`
    font-family: 'Neucha';
    letter-spacing: 0.1px;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    color: #FFFFFF;
    margin-top: 5%;
`

const Days = styled.div`
    position: absolute;
    font-size: 0.7em;
    font-family: 'Gemunu Libre';
    right: 5px;
    top: 5px;
`

const ProjectType = styled.div`
  position: absolute;
  left: 0;
  font-family: 'Neucha';
  top: 0;
`

const Status = styled.div`
    font-size: 0.9em;
    font-family: 'Gemunu Libre';
`

const ProjectCard = ({ title, description, category, subcategory, link, pid, imageUrl, pType, state, chain }) => {
    const [add, setAdd] = useState(process.env.NEXT_PUBLIC_AD_DONATOR)

    useEffect(() => {
        setAdd(GetFundingAddress(chain))
    }, [])

    let bal = 'n/a';
    let days = 'n/a';
    let max = 'n/a';

    const funds = useContractRead({
        addressOrName: add,
        contractInterface: donation.abi,
        functionName: 'funds',
        chain: chain,
        args: [pid],
        watch: false,
    })

    if (funds.data) {
        // Get fund balance
        bal = funds.data.balance.toString()

        // Get fund deadline
        const d = funds.data.deadline.toString()
        const test = new Date(d * 1000);
        days = test.getDate()

        // Get fund cap
        max = funds.data.level1.toString()
    }

    return <A href={link}>
        <Container
            whileHover={{ scale: 1.05 }} 
        >
            {pType !== 'Stream' && <Days>{days}d</Days>}
            <ProjectType>
                    {pType === 'Stream' ? <StreamIcon width={30} /> : <BlockchainIcon width={30}></BlockchainIcon>}
             </ProjectType>
            <div> {!imageUrl ? <ImgSkeleton /> : <Image src={imageUrl} alt={title} width={'300px'} height={'300px'} />}</div>
            <Row>
                <Row>
                    <div> {category && <Tag tag={category} color={"#000850"} />}</div>
                    <div>{subcategory && <Tag tag={subcategory} color={"#035201"} />}</div>
                </Row>
                <Amount>
                    {bal} / {max}
                </Amount>
            </Row>
            <Row>
                <Title>{title}</Title>
                <Status>
                    {state === 0 && <>Initiated</>}
                    {state === 1 && <>Active</>}
                    {state === 2 && <>Completed</>}
                    {state === 3 && <>Failed</>}
                    {state === 4 && <>Canceled</>}
                </Status> 
            </Row>
            <Desc>{description}</Desc>
        </Container>
    </A>
}

export default ProjectCard