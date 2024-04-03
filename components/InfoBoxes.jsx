import InfoBox from "@/components/InfoBox";


function InfoBoxes(props) {
    return (
        <div>
            <section>
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <InfoBox
                        heading='For Renders'
                        backgroundColor='bg-gray-100'
                        children = 'Find your dream rental property. Bookmark properties and contact owners'
                        buttonInfo={{
                            text: 'Browse Properties',
                            link: '/properties',
                            backgroundColor: 'bg-black'
                        }}
                        />
                        <InfoBox
                            heading='For Property Owners'
                            backgroundColor='bg-blue-100'
                            children='List your properties and reach potential tenants. Rent as an Airbnb or long term.'
                            buttonInfo={{
                                text: 'Add Properties',
                                link: '/properties/add',
                                backgroundColor: 'bg-blue-500'
                            }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default InfoBoxes;