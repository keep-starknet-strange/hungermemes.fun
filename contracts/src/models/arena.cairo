// Internal imports

use hungermemes::models::index::Arena;

// Errors

mod errors {}

#[generate_trait]
impl ArenaImpl of ArenaTrait {
    #[inline]
    fn new(battle_id: u32, id: u32) -> Arena {
        Arena { battle_id, id }
    }
}

#[generate_trait]
impl ArenAssert of AssertTrait {}
