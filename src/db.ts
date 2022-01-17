import { Pool } from 'pg';

const connectionString = 'postgres://ofviqagh:sRQA8R4C2y-xhy8bskpdVcvbM1stlEis@motty.db.elephantsql.com/ofviqagh';

const db = new Pool({connectionString});

export default db;