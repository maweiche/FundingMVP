import FeatureCard from '../../components/cards/FeatureCard'
import { BlockchainIcon, MicrofundIcon, PiggyIcon, StreamIcon, CrossAnim, LightAnim, CostAnim, StreamAnim, RewardAnim, RewardLandingIcon } from '../../components/icons/Landing'
import styled from 'styled-components'
import { useState } from 'react'
import Image from 'next/image'
import cross from '../../public/cross.gif'
import chaindonation from '../../public/chaindonation.gif'
import fee from '../../public/fee.gif'
import SectionTitle from '../../components/typography/SectionTitle'
import { RewardIcon } from '../../components/icons/Common'

const Container = styled.div`
    position: relative;
    margin-top: 10%;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

const ContentBox = styled.div`
    margin-top: 5%;
`

const A = styled.a`
    color: #989898;
`

const P = styled.a`
    color: #8247e5;
`

const B = styled.a`
    color: #FFC107;
`

const F = styled.a`
    color: #19e1ff;
`

const G = styled.a`
    color: #00FC83;
`

const R = styled.a`
    color: #FF0000;
`

const Texts = {
    title1: "Crosschain UX",
    description1: "No matter from which chain backers donate, thanks to the Axelar Network, total amount will sum up across all. Currently supported backing from Polygon, BNB Chain, Fantom.",
    title2: "Microfunds",
    description2: "Backers can deploy microfunds instead of classic donations and each time someone after donates, the same amount is charged from all microfunds until they are depleted. With good strategy even $1 donation could have $100 impact.",
    title3: "Lowest fees in the industry",
    description3: "Our infrastructure is powered by blockchain smart contracts, the infrastructure is much more cheaper than traditional crowdfunding companies like Kickstarter, which takes 5% platform fee for successful projects.",
    title4: "Money streaming",
    description4: "Already started project and need long-term support? Create a funding type using our crypto payment streaming, backers can flow resources real-time and turn on/off the streams based on your delivery.",
    title5: "Rewards",
}

const CrossDescription = () => {
    return <>
        No matter from which chain backers donate, thanks to the <A>Axelar Network</A>, total amount will sum up across all. Currently supported backing from <P>Polygon</P>, <B>BNB Chain</B>, <F>Fantom</F>.
    </>
}

const MicroDescription = () => {
    return <>
        Backers can deploy microfunds instead of classic donations and each time someone after donates, the same amount is charged from all microfunds until they are depleted. With good strategy even <G>$1 donation could have $100 impact</G>.
    </>
}

const FeeDescription = () => {
    return <>
        Our infrastructure is powered by blockchain smart contracts, which is more lightweight than <R>Kickstarter's maintanenace, which charges 5% platform fee</R> from successful projects to profit. 
        <F> Eyeseek does it 5x cheaper.</F>
    </>
}

const StreamDescription = () => {
    return <>
        Already started project and need long-term support? Use our <G>crypto payment streaming</G>, backers can flow resources real-time and turn on/off the streams based on your delivery.
    </>
}

const RewardDescription = () => {
    return <>
       Reward your backers with unique <F>NFT collections</F> or <F>in-game blockchain items</F>. We support reward distributuon of <P>ERC1155</P> and <B>ERC20 tokens</B>.
    </>
}

const Features = () => {
    const [demoMicro, setDemoMicro] = useState(false)
    const [demoFunding, setDemoFunding] = useState(false)
    const [demoFee, setDemoFee] = useState(false)
    const [demoStream, setDemoStream] = useState(false)
    const [demoReward, setDemoReward] = useState(false)


    return <Container>
    
        <SectionTitle title='Key concepts' subtitle='How is Eyeseek different' />
        <ContentBox>
            <Row>
                {demoMicro ? 
                    <FeatureCard icon={<BlockchainIcon width={55} />} title={Texts.title1} description={<Image unoptimized={true}  src={cross} width={500} height={300} />} onClick={() => { setDemoMicro(!demoMicro) }} /> :
                    <FeatureCard icon={<BlockchainIcon width={55} />}  anim={<CrossAnim width={200}/>} title={Texts.title1} description={<CrossDescription />} onClick={() => { setDemoMicro(!demoMicro) }} />}

                {demoFunding ? 
                    <FeatureCard icon={<MicrofundIcon width={55} />} title={Texts.title2} description={<Image unoptimized={true} src={chaindonation} width={500} height={300} />} onClick={() => { setDemoFunding(!demoFunding) }} /> :
                    <FeatureCard icon={<MicrofundIcon width={55} />} anim={<LightAnim width={200}/>} title={Texts.title2} description={<MicroDescription />} onClick={() => { setDemoFunding(!demoFunding) }} />
                }
            </Row>
            <Row>
                {demoFee ? 
                    <FeatureCard icon={<PiggyIcon width={55} />} title={Texts.title3} description={<Image unoptimized={true}  src={fee} width={500} height={300}/>} onClick={() => { setDemoFee(!demoFee) }} /> :
                    <FeatureCard icon={<PiggyIcon width={55} />} anim={<CostAnim width={200}/>}  title={Texts.title3} description={<FeeDescription />} onClick={() => { setDemoFee(!demoFee) }} />
                }

                {demoStream ? 
                    <FeatureCard icon={<StreamIcon width={55} />} title={Texts.title4} description={<Image unoptimized={true}  src={fee} width={500} height={300}/>} onClick={() => { setDemoStream(!demoStream) }} /> :
                    <FeatureCard icon={<StreamIcon width={55} />} anim={<StreamAnim width={200}/>}  title={Texts.title4} description={<StreamDescription />} onClick={() => { setDemoStream(!demoStream) }} />
                }
            </Row>
            <Row>
                {demoReward ? 
                    <FeatureCard icon={<RewardLandingIcon width={5}  />} title={Texts.title5} description={<Image unoptimized={true}  src={fee} width={500} height={300}/>} onClick={() => { setDemoReward(!demoReward) }} /> :
                    <FeatureCard icon={<RewardLandingIcon width={55}  />} anim={<RewardAnim width={180}/>}  title={Texts.title5} description={<RewardDescription />} onClick={() => { setDemoReward(!demoReward) }} />
                 }
            </Row>
        </ContentBox>
    </Container>
}

export default Features