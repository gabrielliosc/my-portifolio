
import { Backend } from './Backend';
import { DataScience } from './DataScience';
import { Database } from './DataBase';
import { Design } from './Design';
import { Documentation } from './Documentation';
import { Frontend } from './Frontend';
import { VersionControl } from './VersionControl';
import { Section } from '../Section';
import { useTranslation } from 'react-i18next';



export function Stacks() {
    const { t } = useTranslation()
    
    return(
        <Section title={t(`section.${'stacks'}`)} >
            <>
                <Frontend />
                <Design />
                <Backend />
                <VersionControl />
                <Documentation />
                <Database />
                <DataScience />
            </>
        </Section>
    )
}