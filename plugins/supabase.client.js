// import { createClient } from '@supabase/supabase-js'
// export default({ app }, inject) => {
//     const supabaseUrl= 'https://gkjxlajwyrzgnkuvqlbl.supabase.co'
//     const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODc4NjU3NiwiZXhwIjoxOTU0MzYyNTc2fQ.c2EjDUoCD_mFLzolC9rjzkpYwroSt11rDcNBQTptoQg'
//     const supabase = createClient(supabaseUrl, supabaseKey)
//     inject('supabase', supabase)
// }
import { createClient } from '@supabase/supabase-js'
export default({ app }, inject) => {
    const supabaseUrl= 'https://gkjxlajwyrzgnkuvqlbl.supabase.co'
    const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjA1OTg4NSwiZXhwIjoxOTQ3NjM1ODg1fQ.ImJcDxcgcoTWXULBvZyD8jng5MQ5NyyZh3UbOlJytAM'
    const supabase = createClient(supabaseUrl, supabaseKey)
    inject('supabase', supabase)
}

